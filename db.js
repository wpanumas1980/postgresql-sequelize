const Pool = require('pg').Pool;

const pool = new Pool({
  user: "admin",
  password: "pass",
  database: "pern_blog",
  host: "postgresql",
  port: 5432
})

module.exports = pool; 