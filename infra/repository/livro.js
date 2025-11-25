const { query } = require("../database");

async function consultarTodos() {
  const sql = `SELECT * FROM livro WHERE top_livro = true`;
  const resultados = await query(sql)
  return resultados;
}

async function consultaTops() {
  const sql = `SELECT * FROM livro WHERE top_livro = true`;
  const resultados = await query(sql)
  return resultados;
}
 
async function consultaMaisAdquiridos() {
  const sql = `SELECT * FROM livro WHERE livros_mais_adquiridos  = true`;
  const resultados = await query(sql)
  return resultados;
}

async function consultaMaisCurtidos() {
  const sql = `SELECT * FROM livro ORDER BY curtidas DESC LIMIT 5`;
  const resultados = await query(sql)
  return resultados;
}

 module.exports = {  consultarTodos, consultaTops, consultaMaisAdquiridos, consultaMaisCurtidos}

