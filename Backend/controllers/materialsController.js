const db = require('../db');

async function listMaterials(req, res) {
  try {
    const q = `
      SELECT m.id, m.name, m.quantity,
        CASE WHEN m.quantity > 0 THEN 'available' ELSE 'unavailable' END AS status
      FROM materials m
      ORDER BY m.name;
    `;
    const { rows } = await db.query(q);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
}

async function createMaterial(req, res) {
  try {
    const { name, quantity = 1 } = req.body;
    if (!name) return res.status(400).json({ error: 'name required' });
    const q = `INSERT INTO materials (name, quantity) VALUES ($1, $2) RETURNING *`;
    const { rows } = await db.query(q, [name, quantity]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
}

module.exports = { listMaterials, createMaterial };
