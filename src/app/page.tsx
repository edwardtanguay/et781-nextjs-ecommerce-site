import db from "@/data/db.json";

const products = db.products;

export default function Home() {
	return (
		<main>
			<h1 className="text-2xl mb-3">E-Commerce Site</h1>
			<p>Welcome.</p>
			<h2 className="text-2xl mt-6">Products</h2>
			{products.map((product) => {
				return (
					<div key={product.id}>
						<p>{product.model}</p>
					</div>
				);
			})}
		</main>
	);
}
