import Cart from "../schema/cartSchema";
import Product from "../schema/productSchema";
interface cartData {
	productId: String;
	quantity: Number;
}

const getProductList = async () => {
	const productList = await Product.find();

	return productList;
};

const getCartList = async () => {
	const cartList = await Cart.find();

	return cartList;
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

export default { getProductList, getCartList, insertCartList, deleteCartList };
