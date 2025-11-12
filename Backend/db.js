require('dotenv').config();
const { Pool } = require('pg');

const useSsl = process.env.DB_SSL === 'true'; // poner DB_SSL=true en entornos que requieran TLS
// Esta cosa sabe dar errores, si te sale alguno revisa bien la cadena de conexión en el .env

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: useSsl ? { rejectUnauthorized: false } : false
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  getClient: () => pool.connect()
};

