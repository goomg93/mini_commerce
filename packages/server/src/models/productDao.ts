import Cart from "../schema/cartSchema";
import Product from "../schema/productSchema";
import { cartData } from "../services/productService";

const getProductList = async () => {
	const productList = await Product.find();

	return productList;
};

// const getProductInfoById = async (productId: String) => {
// 	const productInfoById = await Product.find({
// 		_id: productId,
// 	}).select({ name: "$name", price: "$price" });

// 	return productInfoById;
// };

const getCartList = async () => {
	const cartList = await Cart.find().select({
		name: "$name",
		price: "$price",
		quantity: "$quantity",
	});

	return cartList;
};

const getCartItemByProductId = async (productId: String) => {
	const cartItem = await Cart.find({ productId: productId });

	return cartItem;
};

const insertCartList = async (insertCartData: cartData) => {
	const insertCart = new Cart(insertCartData);

	await insertCart.save();

	return insertCart;
};

const deleteCartList = async (cartId: string) => {
	const deleteResult = await Cart.deleteOne({ _id: cartId });
	return deleteResult;
};

const updateCartList = async (updateCartData: cartData) => {
	const updateCart = await Cart.findOneAndUpdate(
		{ productId: updateCartData.productId },
		{ $inc: { quantity: updateCartData.quantity } }
	);

	return updateCart;
};

export default {
	getProductList,
	getCartList,
	insertCartList,
	deleteCartList,
	getCartItemByProductId,
	updateCartList,
};
