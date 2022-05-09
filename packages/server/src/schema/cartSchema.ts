import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
	productId: {
		type: String,
		require: true,
	},
	quantity: {
		type: Number,
		require: true,
	},
});

const Cart = mongoose.model("cart", cartSchema);

export default Cart;
