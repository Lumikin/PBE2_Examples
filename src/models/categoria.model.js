import pool from "../config/db.js";

const categoriaModel = {
  selectAll: async () => {
    const sql = "SELECT * FROM categorias";
    const [rows] = await pool.execute(sql);
    return rows;
  },
  select: async (id) => {
    const sql = "SELECT * FROM categorias WHERE idCategoria = ?";
    const values = [id];
    const [rows] = await pool.execute(sql, values);
    return rows;
  },
  insert: async (descricao) => {
    const sql = "INSERT INTO categorias (descricao) VALUES (?)";
    const values = [descricao];
    const [rows] = await pool.execute(sql, values);
    return rows;
  },
  update: async (descricao, id) => {
    const sql =
      "UPDATE categorias SET descricao = ? WHERE idCategoria = ?";
    const values = [descricao, id];
    const [rows] = await pool.execute(sql, values);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM categorias WHERE idCategoria = ?";
    const values = [id];
    const [rows] = await pool.execute(sql, values);
    return rows;
  },
};

export default categoriaModel;
