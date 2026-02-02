import express from "express";
const router = express.Router();
import xmlController from "../controllers/xml.controller.js";
router.post("/produtos", xmlController.criarProduto);

export default router;
