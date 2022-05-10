import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Products from "./pages/Products/Products";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Products />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
