"use client";
import { AppContext } from "@/AppContext";
import { Product } from "@/components/Product";
import { useContext } from "react";

export default function Cart() {
	const { cart, getProductWithId } = useContext(AppContext);
	return (
		<>
			<p className="mb-3">Customer type: {cart.customerType}</p>
			<p className="mb-3">
				Number of products in cart:{" "}
				{cart.cartProducts.reduce((sum, cartProduct) => {
					sum = sum + cartProduct.quantity;
					return sum;
				}, 0)}
			</p>

			<section className="mt-4">
				{cart.cartProducts.map((cartProduct) => {
					const product = getProductWithId(cartProduct.productId);
					return (
						<>
							{product && (
								<>
									<Product key={product.id} quantity={cartProduct.quantity}   product={product}/>
								</>
							)}
						</>
					);
				})}
			</section>
		</>
	);
}
