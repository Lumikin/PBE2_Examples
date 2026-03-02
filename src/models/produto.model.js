import pool from "../config/db.js";

const produtoModel = {
  selectAll: async () => {
    const sql = "SELECT * FROM produtos";
    const [rows] = await pool.execute(sql);
    return rows;
  },
  select: async (id) => {
    const sql = "SELECT * FROM produtos WHERE idCategoria = ?";
    const values = [id];
    const [rows] = await pool.execute(sql, values);
    return rows;
  },
  insert: async (idCategoria, nomeProduto, valor, vinculoImagem) => {
    const sql =
      "INSERT INTO produtos (idCategoria, nomeProduto, valor, vinculoImagem) VALUES (?,?,?,?)";
    const values = [idCategoria, nomeProduto, valor, vinculoImagem];
    const [rows] = await pool.execute(sql, values);
    return rows;
  },
  update: async (idCategoria, nomeProduto, valor, vinculoImagem, id) => {
    const sql =
      "UPDATE produtos SET idCategoria =? nomeProduto = ? valor = ? vinculoImagem = ? WHERE idCategoria = ?";
    const values = [idCategoria, nomeProduto, valor, vinculoImagem, id];
    const [rows] = await pool.execute(sql, values);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM produtos WHERE idCategoria = ?";
    const values = [id];
    const [rows] = await pool.execute(sql, values);
    return rows;
  },
};

export default produtoModel;
