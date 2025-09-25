const { Client } = require("pg");

async function query(sql, args = []) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "carisbe",
    database:"maisleitura",
    password: "42264",
  });
  await client.connect();

  const res = await client.query(sql, args);

  await client.end();
  return res.rows;
}

module.exports = {query}