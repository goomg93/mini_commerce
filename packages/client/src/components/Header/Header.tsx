import { useState } from "react";
import CartModal from "../CartModal/CartModal";
import "./Header.scss";

function Header() {
	const [cartClass, setCartClass] = useState(false);

	const handleCartClass = (): void => {
		cartClass ? setCartClass(false) : setCartClass(true);
		return;
	};
	return (
		<>
			<div className="header">
				<h1 className="title">mini-commerce</h1>
				<div className="cartIcon" onClick={handleCartClass}>
					<img
						src="https://cdn-icons-png.flaticon.com/512/3649/3649593.png"
						width="40px"
					/>
				</div>
			</div>
			<CartModal cartClass={cartClass} setCartClass={setCartClass} />
		</>
	);
}

export default Header;
