/* eslint-disable jsx-a11y/alt-text */
import db from "@/data/db.json";

const products = db.products;

export default function Products() {
	return (
		<main>
			{products.map((product) => {
				return (
					<div key={product.id} className="mb-4 bg-slate-600 p-4 rounded w-1/2 flex gap-3">
						<img src={`images/products/product_${product.id}.jpg`}/>
						<section>
						<p className="text-xs text-yellow-500">{product.category}</p>
						<p className="font-semibold text-2xl">{product.brand} {product.model}</p>
						<p className="text-red-500">{product.price} €</p>
						</section>
					</div>
				);
			})}
		</main>
	);
}
