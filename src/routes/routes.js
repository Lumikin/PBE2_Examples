import { Router } from "express";
import categoriaRoutes from "./categoria.routes.js";
import produtoRoutes from "./produto.routes.js";

const router = Router()

router.use('/', categoriaRoutes)
router.use('/', produtoRoutes)


export default router
