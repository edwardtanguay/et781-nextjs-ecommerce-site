import { IProduct } from "@/interfaces";

interface IProps {
	product: IProduct;
	quantity?: number;
}

export const Product = ({ product, quantity }: IProps) => {
	return (
		<div
			key={product.id}
			className="mb-4 bg-slate-600 p-4 rounded w-1/2 flex gap-3"
		>
			{quantity && <p className="text-slate-100 text-2xl">{quantity}x</p>}
			<img src={`images/products/product_${product.id}.jpg`} />
			<section>
				<p className="text-xs text-yellow-500">{product.category}</p>
				<p className="font-semibold text-2xl">
					{product.brand} {product.model}
				</p>
				<p className="text-red-500">{product.price} €</p>
			</section>
		</div>
	);
};
