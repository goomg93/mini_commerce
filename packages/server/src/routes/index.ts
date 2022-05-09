import Express from "express";
import productRouter from "./productRouter";

const router = Express.Router();

router.use("/products", productRouter);

export default router;
