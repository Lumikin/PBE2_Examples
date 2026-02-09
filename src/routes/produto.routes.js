import { Router } from "express";
import uploadImage from "../middlewares/uploadimage.middleware.js";
import produtoController from "../controllers/produto.controller.js";

const produtoRoutes = Router();

produtoRoutes.post("/produtos/image", uploadImage, produtoController.upload);

export default produtoRoutes;
