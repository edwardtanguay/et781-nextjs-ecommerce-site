"use client";
import { createContext, useState } from "react";
import db from "@/data/db.json";
import { ICart, IProduct, blankCart } from "./interfaces";
import { useRouter } from "next/navigation";

const _products = db.products;

interface IAppContext {
	products: IProduct[];
	cart: ICart;
	getProductWithId: (id: number) => IProduct | undefined;
	handleAddProductToCart: (id: number) => void;
	getTotalPriceOfCart: () => number;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [products, setProducts] = useState<IProduct[]>(_products);
	const [cart, setCart] = useState<ICart>(blankCart);

	const { push } = useRouter();

	const getProductWithId = (id: number): IProduct | undefined => {
		return products.find((m) => m.id === id);
	};

	const handleAddProductToCart = (id: number) => {
		const productIdsInCart = cart.cartProducts.map((m) => m.productId);
		const idIsAlreadyInCart = productIdsInCart.includes(id);

		if (idIsAlreadyInCart) {
			const cartProduct = cart.cartProducts.find(
				(m) => m.productId === id
			);
			if (cartProduct) {
				cartProduct.quantity++;
			}
		} else {
			cart.cartProducts.push({
				productId: id,
				quantity: 1,
			});
		}
		setCart(structuredClone(cart));
		push("/cart");
	};

	const getTotalPriceOfCart = () => {
		return cart.cartProducts.reduce((total, cartProduct) => {
			const product = products.find(m => m.id === cartProduct.productId);

			if (product) {
				total = total + (product.price * cartProduct.quantity); 
			}
			return total;
		}, 0)
	}

	return (
		<AppContext.Provider
			value={{
				products,
				cart,
				getProductWithId,
				handleAddProductToCart,
				getTotalPriceOfCart
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
