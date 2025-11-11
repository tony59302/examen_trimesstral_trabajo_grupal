const db = require('../db');

async function createLoan(req, res) {
  const { material_id, borrower_name } = req.body;
  if (!material_id || !borrower_name) return res.status(400).json({ error: 'material_id y borrower_name requeridos' });

  const client = await db.getClient();
  try {
    await client.query('BEGIN');

    // Verificar cantidad disponible
    const matRes = await client.query('SELECT id, quantity FROM materials WHERE id = $1 FOR UPDATE', [material_id]);
    if (matRes.rowCount === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: 'material no encontrado' });
    }
    const material = matRes.rows[0];
    if (material.quantity <= 0) {
      await client.query('ROLLBACK');
      return res.status(400).json({ error: 'material no disponible' });
    }

    // Decrementar cantidad
    await client.query('UPDATE materials SET quantity = quantity - 1 WHERE id = $1', [material_id]);

    // Insertar préstamo
    const insertLoan = `INSERT INTO loans (material_id, borrower_name) VALUES ($1, $2) RETURNING *`;
    const loanRes = await client.query(insertLoan, [material_id, borrower_name]);

    await client.query('COMMIT');
    res.status(201).json(loanRes.rows[0]);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'error al crear préstamo' });
  } finally {
    client.release();
  }
}

async function returnLoan(req, res) {
  const loanId = req.params.id;
  const client = await db.getClient();
  try {
    await client.query('BEGIN');

    // Obtener préstamo y bloqueo
    const loanRes = await client.query('SELECT id, material_id, return_date FROM loans WHERE id = $1 FOR UPDATE', [loanId]);
    if (loanRes.rowCount === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: 'préstamo no encontrado' });
    }
    const loan = loanRes.rows[0];
    if (loan.return_date) {
      await client.query('ROLLBACK');
      return res.status(400).json({ error: 'préstamo ya devuelto' });
    }

    // Marcar devolución y aumentar cantidad
    await client.query('UPDATE loans SET return_date = now() WHERE id = $1', [loanId]);
    await client.query('UPDATE materials SET quantity = quantity + 1 WHERE id = $1', [loan.material_id]);

    await client.query('COMMIT');
    res.json({ ok: true, msg: 'Devolución registrada' });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'error al devolver préstamo' });
  } finally {
    client.release();
  }
}

async function listLoans(req, res) {
  try {
    const q = `
      SELECT l.id, l.material_id, m.name as material_name, l.borrower_name, l.loan_date, l.return_date
      FROM loans l
      JOIN materials m ON m.id = l.material_id
      ORDER BY l.loan_date DESC
      LIMIT 200;`;
    const { rows } = await db.query(q);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
}

module.exports = { createLoan, returnLoan, listLoans };
