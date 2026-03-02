import { Router } from "express";
import uploadImage from "../middlewares/uploadimage.middleware.js";
import { uploadDocument } from "../middlewares/uploadDocs.middleware.js";
import produtoController from "../controllers/produto.controller.js";

const produtoRoutes = Router();

produtoRoutes.post("/produtos/image", uploadImage, produtoController.upload);
produtoRoutes.post("/produtos/docs", uploadDocument, produtoController.upload);

export default produtoRoutes;
