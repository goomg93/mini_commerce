import productDao from "../models/productDao";

const getProductList = async () => {
	const productList = await productDao.getProductList();

	return productList;
};

export default { getProductList };
