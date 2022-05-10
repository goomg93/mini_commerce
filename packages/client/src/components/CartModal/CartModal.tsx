import { Children, useEffect, useState } from "react";
import "./CartModal.scss";

interface props {
	cartClass: boolean;
	setCartClass: Function;
}

interface cart {
	name: String;
	price: Number;
	quantity: Number;
}

function CartModal(props: props) {
	const handleCartClass = () => {
		props.cartClass ? props.setCartClass(false) : props.setCartClass(true);
		return;
	};
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/products/cart")
			.then((res) => res.json())
			.then((data) => {
				setCarts(data);
			});
	}, [props.cartClass]);
	return (
		<>
			<div className={props.cartClass ? "cartModalOn" : "cartModalOff"}>
				<div onClick={handleCartClass}>CLOSE</div>
				<p>장바구니</p>
				<div>
					{carts &&
						carts.map((el: cart) => {
							return (
								<div className="cartProduct">
									<div className="productName">품목 : {el.name}</div>
									<div className="price">가격 : {el.price} </div>
									<div className="quantity">수량 : {el.quantity}</div>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default CartModal;
