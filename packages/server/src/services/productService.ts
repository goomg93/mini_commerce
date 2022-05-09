import productDao from "../models/productDao";
interface cartData {
	productId: String;
	quantity: Number;
}

const getProductList = async () => {
	const productList = await productDao.getProductList();

	return productList;
};

const getCartList = async () => {
	const cartList = await productDao.getCartList();

	return cartList;
};

const insertCartList = async (insertCartData: cartData) => {
	const insertResult = await productDao.insertCartList(insertCartData);
	console.log(insertResult);
	return;
};

const deleteCartList = async (cartId: string) => {
	const deleteResult = await productDao.deleteCartList(cartId);

	console.log(deleteResult);
	return;
};

export default { getProductList, getCartList, insertCartList, deleteCartList };
