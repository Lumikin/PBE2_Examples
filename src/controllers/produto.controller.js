import prisma from "../models/prisma.client.js";

const produtoController = {
  criar: async (req, res) => {
    try {
      const { nome, preco } = req.body; //Implementar validações dos valores (campos) recebidos
      const result = await prisma.produtos.create({
        data: { nomeProduto: nome, precoProduto: preco },
      }); // Create é como um insert sem precisar escrever todo o bloco

      res.status(201).json({ message: "Registro Incluido com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocorreu um erro no servidor",
      });
    }
  },
  listar: async (req, res) => {
    try {
      if (req.query.productId) {
        const { productId } = Number(req.query.productId);

        const result = await prisma.produtos.findUnique({
          where: { idProduto: productId },
        });

        return res.status(200).json({ data: result });
      }

      const result = await prisma.produtos.findMany();
      if (result.length === 0) {
        return res.status(400).json({
          message: "Não há registros na tabela",
        });
      }
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocorreu um erro no servidor",
        errorMessage: error.message,
      });
    }
  },
};

export default produtoController;
