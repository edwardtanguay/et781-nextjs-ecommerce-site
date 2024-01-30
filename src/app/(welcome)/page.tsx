import db from "@/data/db.json";

const products = db.products;

export default function Home() {
	return (
		<main>
			<h1 className="text-2xl mb-3">E-Commerce Site</h1>
			<p>Welcome.</p>
		</main>
	);
}
