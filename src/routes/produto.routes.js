import { Router } from "express";
import uploadImage from "../middlewares/uploadimage.middleware.js";
import produtoController from "../controller/produto.controller.js";
const produtoRoutes = Router();

produtoRoutes.get("/produtos/", produtoController.select);
produtoRoutes.get("/produtos/:id", produtoController.selectId);
produtoRoutes.post("/produtos/", uploadImage, produtoController.inserir);
produtoRoutes.put("/produtos/", produtoController.alterar);
produtoRoutes.delete("/produtos/:id", produtoController.exluir);

export default produtoRoutes;
