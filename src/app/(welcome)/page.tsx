"use client";
import { AppContext } from "@/AppContext";
import { Product } from "@/components/Product";
import { useContext } from "react";

export default function Home() {
	const { products } = useContext(AppContext);

	const productOfTheWeek = products.find((m) => m.id === 6);

	return (
		<main>
			<p className="mb-3">Welcome to our tech products store.</p>
			<p className="mb-3">
				We have {products.length} products for you to choose from.
			</p>
			<div className="mb-3">
				<p className="font-semibold">Product of the week:</p>
				{productOfTheWeek && <Product product={productOfTheWeek} />}
			</div>
		</main>
	);
}
