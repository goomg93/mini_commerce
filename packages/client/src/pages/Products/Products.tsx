import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.scss";

export interface productPropsShape {
	_id: string;
	name: string;
	price: number;
	quantity: number;
	imgUrl: string;
}
function Products() {
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/products")
			.then((res) => res.json())
			.then((data) => {
				setProductList(data);
			});
	}, []);

	console.log(productList);
	return (
		<div className="productList">
			<Header />
			<div className="productWrapper">
				{productList &&
					productList.map((el: productPropsShape, index) => {
						return (
							<ProductCard
								_id={el._id}
								name={el.name}
								price={el.price}
								quantity={el.quantity}
								imgUrl={el.imgUrl}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default Products;
