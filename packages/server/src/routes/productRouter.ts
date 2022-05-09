import Express from "express";
import productController from "../controllers/productContoller";

const router = Express.Router();

router.get("/", productController.getProductList);
router.get("/cart", productController.getCartList);

export default router;
