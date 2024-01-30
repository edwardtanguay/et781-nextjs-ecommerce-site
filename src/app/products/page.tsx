import db from "@/data/db.json";

const products = db.products;

export default function Products() {
	return (
		<main>
			<h2 className="text-xl mb-3">Products</h2>
			{products.map((product) => {
				return (
					<div key={product.id} className="mb-4 bg-slate-600 p-4 rounded w-1/2">
						<p className="text-xs text-yellow-500">{product.category}</p>
						<p className="font-semibold text-2xl">{product.brand} {product.model}</p>
						<p className="text-red-500">{product.price} €</p>
					</div>
				);
			})}
		</main>
	);
}
