import db from "@/data/db.json";

const products = db.products;

export default function Products() {
	return (
		<main>
			<h1 className="text-2xl mb-3">Products</h1>
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
