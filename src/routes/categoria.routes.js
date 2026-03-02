import { Router } from "express";
import categoriaController from "../controller/categoria.controller.js";

const categoriaRoutes = Router();

categoriaRoutes.get("/categorias", categoriaController.select);
categoriaRoutes.get("/categorias/:id", categoriaController.selectId);
categoriaRoutes.post("/categorias", categoriaController.inserir);
categoriaRoutes.put("/categorias/:id", categoriaController.alterar);
categoriaRoutes.delete("/categorias/:id", categoriaController.exluir);

export default categoriaRoutes;
