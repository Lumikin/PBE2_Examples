import categoriaModel from "../models/categoria.model.js";

const categoriaController = {
  select: async (req, res) => {
    try {
      const result = await categoriaModel.selectAll();
      res.status(201).json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        Message: "Ocorreu um erro no servidor",
        errorMessage: error.message,
      });
    }
  },
  
  selectId: async (req, res) => {
    try {
      const { id } = req.query.id;
      const result = await categoriaModel.select(id);
      res.status(201).json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        Message: "Ocorreu um erro no servidor",
        errorMessage: error.message,
      });
    }
  },
  inserir: async (req, res) => {
    try {
      const { descricao } = req.body;
      const result = await categoriaModel.insert(descricao);
      res.status(201).json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        Message: "Ocorreu um erro no servidor",
        errorMessage: error.message,
      });
    }
  },
  alterar: async (req, res) => {
    try {
      const { descricao, id } = req.body;
      if (!id || id <= 0 || !descricao || descricao.lenth === 0) {
        return res.status(400).json({
          message: "Verifique os dados e tente novamente",
        });
      }

      const result = await categoriaModel.update(descricao, id);
      res.status(201).json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        Message: "Ocorreu um erro no servidor",
        errorMessage: error.message,
      });
    }
  },
  exluir: async (req, res) => {
    try {
      const id = req.query.id;
      if (!id || id <= 0) {
        return res.status(400).json({
          message: "Verifique o ID fornecido e tente novamente",
        });
      }
      const result = await categoriaModel.delete(id);
      res.status(201).json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        Message: "Ocorreu um erro no servidor",
        errorMessage: error.message,
      });
    }
  },
};

export default categoriaController;
