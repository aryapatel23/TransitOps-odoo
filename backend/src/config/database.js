require('dotenv').config();
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5433/transitops';

const pool = new Pool({
  connectionString,
});

module.exports = {
  pool,
  query: (text, params) => pool.query(text, params),
};

