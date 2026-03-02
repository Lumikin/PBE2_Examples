import produtoModel from "../models/produto.model.js";

const produtoController = {
  select: async (req, res) => {
    try {
      const result = await produtoModel.selectAll();
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

      //   ---- verificação de imagem ---- //

      if (!req.file) {
        return res.status(400).json({
          message: "Arquivo não enviado",
        });
      }

      const {idCategoria, nomeProduto, valor} = req.body
      if (!idCategoria || idCategoria <= 0 || !nomeProduto || nomeProduto.length < 3 || !valor || valor <= 0) {
        return res.status(400).json({
            message:'Virifique os dados e tente novamente'
        })
      }
      const vinculoImagem = `/uploads/images/${req.file.filename}` //Caminho relativo
      const result = await produtoModel.insert(idCategoria, nomeProduto, valor, vinculoImagem)
      res.status(200).json({ result });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erro no Servidor",
        errorMessage: error.message,
      });
    }
  },
  selectId: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await produtoModel.select(id);
      if (result.length === 0) {
        return res.status(200).json({
          message: "Não há registro com esse ID",
        });
      }
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
      const {idCategoria, nomeProduto, valor} = req.body
      if (!idCategoria || idCategoria <= 0 || !nomeProduto || nomeProduto.length < 3 || !valor || valor <= 0) {
        return res.status(400).json({
            message:'Virifique os dados e tente novamente'
        })
      }

      const result = await produtoModel.update(idCategoria, nomeProduto, valor, id);
      if (result.length === 0) {
        return res.status(200).json({
          message: "Não tem registros na tabela",
        });
      }

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
      const id = req.params.id;
      if (!id || id <= 0) {
        console.log(id);
        return res.status(400).json({
          message: "Verifique o ID fornecido e tente novamente",
        });
      }
      const result = await produtoModel.delete(id);
      if (result.affectedRows === 0) {
        return res.status(400).json({
          message: "Erro ao remover ID",
        });
      }
      console.log(result);
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

export default produtoController;
