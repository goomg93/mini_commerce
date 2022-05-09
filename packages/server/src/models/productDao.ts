import Product from "../schema/productSchema";

const getProductList = async () => {
	const productList = await Product.find();

	return productList;
};

export default { getProductList };
