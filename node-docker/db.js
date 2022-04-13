const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "testdb",
  host: "postgres",
  port: "5432",
});

module.exports = pool;
