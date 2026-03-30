import { Categoria } from "../models/Categoria.js";
import categoriaRepository from "../repositories/CategoriaRepositories.js";
const categoriaController = {
  selecionar: async (req, res) => {
    try {
      const result = await categoriaRepository.selecionar();
      res.status(201).json({ result });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Ocorreu um erro no servidor",
      });
    }
  },
  criar: async (req, res) => {
    try {
      const { nome, descricao } = req.body;
      const categoria = Categoria.criar({ nome, descricao });
      const result = await categoriaRepository.criar(categoria);
      res.status(201).json({ result });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Ocorreu um erro no servidor",
      });
    }
  },
  atualizar: async (req, res) => {
    try {
      const id = Number(req.query.id);
      const { nome, descricao } = req.body;
      const categoria = Categoria.criar({ nome, descricao, id });
      const result = await categoriaRepository.editar(categoria);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Ocorreu um erro no servidor",
      });
    }
  },
  deletar: async (req, res) => {
    try {
      const id = Number(req.params);
      const categoria = Categoria.criar({ id });
      const result = await categoriaRepository.deletar(categoria);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Ocorreu um erro no servidor",
      });
    }
  },
};
export default categoriaController;
