import { Request, Response } from "express";
import productService from "../services/productService";

const getProductList = async (_: Request, res: Response) => {
	try {
		const productList = await productService.getProductList();

		return res.status(200).json(productList);
	} catch (err) {
		return res.status(500).json({ message: "Error" });
	}
};

const getCartList = async (_: Request, res: Response) => {
	try {
		const cartList = await productService.getCartList();

		return res.status(200).json(cartList);
	} catch (err) {
		return res.status(500).json({ message: "Error" });
	}
};

const insertCartList = async (req: Request, res: Response) => {
	try {
		interface cartData {
			productId: String;
			quantity: Number;
		}
		const insertCartData: cartData = req.body;
		await productService.insertCartList(insertCartData);

		return res.status(200).json({ message: "insert success" });
	} catch (err) {
		return res.status(500).json({ message: "Error" });
	}
};

const deleteCartList = async (req: Request, res: Response) => {
	try {
		const cartId: string = req.body.cartId;

		await productService.deleteCartList(cartId);

		return res.status(204).json({ message: "delete cart" });
	} catch (err) {
		return res.status(500).json({ message: "Error" });
	}
};

export default { getProductList, getCartList, insertCartList, deleteCartList };
