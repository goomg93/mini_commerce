import productDao from "../models/productDao";
export interface cartData {
	productId: String;
	quantity: Number;
	name: String;
	price: Number;
}

const getProductList = async () => {
	const productList = await productDao.getProductList();

	return productList;
};

const getCartList = async () => {
	const cartList = await productDao.getCartList();

	return cartList;
};

const insertCartList = async (cartData: cartData) => {
	// const productInfoById: productInfo = await productDao.getProductInfoById(
	// 	cartData.productId
	// );

	// const insertCartData: insertCartData = {
	// 	productId: cartData.productId,
	// 	name: productInfoById.name,
	// 	price: productInfoById.price,
	// 	quantity: cartData.quantity,
	// };

	const cartItemByProductId = await productDao.getCartItemByProductId(
		cartData.productId
	);
	if (cartItemByProductId.length !== 0) {
		const updateCart = await productDao.updateCartList(cartData);
    console.log(updateCart)
		return;
	}
	const insertResult = await productDao.insertCartList(cartData);
	console.log(insertResult);
	return;
};

const deleteCartList = async (cartId: string) => {
	const deleteResult = await productDao.deleteCartList(cartId);

	console.log(deleteResult);
	return;
};

export default { getProductList, getCartList, insertCartList, deleteCartList };
