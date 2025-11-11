require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: false });

(async () => {
  try {
    const r = await pool.query('SELECT now()');
    console.log('Conectado. Hora DB:', r.rows[0].now);
    await pool.end();
  } catch (err) {
    console.error('Error de conexión:', err.message);
    process.exit(1);
  }
})();
// Es solo un archivo de test.