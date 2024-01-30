"use client";
import { AppContext } from "@/AppContext";
import { useContext } from "react";

export default function Home() {
	const { products } = useContext(AppContext);
	return (
		<main>
			<p className="mb-3">Welcome to our tech products store.</p>
			<p className="mb-3">We have {products.length} products for you to choose from.</p>
		</main>
	);
}
