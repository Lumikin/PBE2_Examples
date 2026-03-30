import { Router } from "express";
import categoriaController from "../controllers/categoriaController.js";

const categoriaRoutes = Router();

categoriaRoutes.get("/", categoriaController.selecionar);
categoriaRoutes.post("/", categoriaController.criar);
categoriaRoutes.put("/", categoriaController.atualizar);
categoriaRoutes.delete("/", categoriaController.deletar);

export default categoriaRoutes;
