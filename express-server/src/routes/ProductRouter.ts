import { Router } from "express";
import ProductController from "../controllers/ProductController";

const router: Router = Router()

const controller = new ProductController()

router.get('/products', controller.readAllProducts)
router.get('/products/:id', controller.readOneProduct)
router.post('/products', controller.postProduct)

export {router as ProductRouter }