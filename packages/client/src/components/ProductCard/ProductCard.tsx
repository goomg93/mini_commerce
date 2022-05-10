import { useState } from "react";
import { productPropsShape } from "../../pages/Products/Products";
import "./ProductCard.scss";

function ProductCard(product: productPropsShape) {
	const [quantity, setQuantity] = useState(1);
	const decreaseQuantity = () => {
		if (quantity === 0) {
			return;
		}
		setQuantity(quantity - 1);
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const addCart = () => {
		if (quantity === 0) {
			alert("수량을 최소 1개 이상 선택하십시오");
			return;
		}
		fetch("http://localhost:3001/products/cart", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				productId: product._id,
				quantity: quantity,
				name: product.name,
				price: product.price,
			}),
		});

		alert("장바구니에 추가 되었습니다.");
		setQuantity(1);
	};

	const isZero = quantity === 0 ? true : false;
	return (
		<div className="productCardWrapper">
			<img src={product.imgUrl} width="200px" height="200px" />
			<p>{product.name}</p>
			<p>{product.price}원</p>
			<div className="quantityWrapper">
				<p>수량</p>
				<div className="quantityBox">
					<button
						className="button"
						onClick={decreaseQuantity}
						disabled={isZero}
					>
						-
					</button>
					<p className="count">{quantity}</p>
					<button className="button" onClick={increaseQuantity}>
						+
					</button>
				</div>
			</div>
			<div className="cart" onClick={addCart}>
				<img
					src="data:image/jpeg;base64,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"
					width="40px"
					height="40px"
				/>
			</div>
		</div>
	);
}

export default ProductCard;
