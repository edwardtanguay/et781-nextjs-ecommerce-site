"use client";
import { AppContext } from "@/AppContext";
import { Product } from "@/components/Product";
import { useContext } from "react";

/* eslint-disable jsx-a11y/alt-text */
export default function Products() {
	const { products } = useContext(AppContext);
	return (
		<main>
			{products.map((product) => {
				return (
					<Product key={product.id} product={product}/>
				)
			})}
		</main>
	);
}
