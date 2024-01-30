"use client";
import { AppContext } from "@/AppContext";
import { useContext } from "react";

export default function Cart() {
	const { cart } = useContext(AppContext);
	return (
		<>
			<p className="mb-3">Customer type: {cart.customerType}</p>	
			<p className="mb-3">Number of products in cart: {cart.cartProducts.reduce((sum, cartProduct) => {
				sum = sum + cartProduct.quantity;
				return sum;
			}, 0)}</p>	
		</>
	)
}
