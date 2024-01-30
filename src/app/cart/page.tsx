"use client";
import { AppContext } from "@/AppContext";
import { Product } from "@/components/Product";
import React from "react";
import { useContext } from "react";

export default function Cart() {
	const { cart, getProductWithId, getTotalPriceOfCart } = useContext(AppContext);
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
			<p className="mb-3">Total price: {getTotalPriceOfCart()} €</p>

			<section className="mt-4">
				{cart.cartProducts.map((cartProduct) => {
					const product = getProductWithId(cartProduct.productId);
					return (
						<React.Fragment key={cartProduct.productId}>
							{product && (
								<>
									<Product
										key={product.id}
										quantity={cartProduct.quantity}
										product={product}
									/>
								</>
							)}
						</React.Fragment>
					);
				})}
			</section>
		</>
	);
}
