import prisma from "../models/prisma.client.js";

const produtoController = {
  criar: async (req, res) => {
    try {
      const { nome, preco } = req.body; //Implementar validações dos valores (campos) recebidos
      const result = await prisma.produtos.create({
        data: { nomeProduto: nome, precoProduto: preco },
      }); // Create é como um insert sem precisar escrever todo o bloco

      res.status(201).json({
        message: "Registro Incluido com sucesso",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocorreu um erro no servidor",
      });
    }
  },
};

export default produtoController;
