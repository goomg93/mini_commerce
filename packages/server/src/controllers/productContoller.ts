import { Request, Response } from "express";
import productService from "../services/productService";

const getProductList = async (_: Request, res: Response) => {
	try {
		const productList = await productService.getProductList();

		return res.status(200).json({ productList });
	} catch (err) {
		return res.status(400).json({ message: "Error" });
	}
};

const getCartList = async (_:Request, res: Response) => {
  try{
    const cartList = await productService.getCartList()

    return res.status(201).json(cartList)
  }
}

export default { getProductList };
