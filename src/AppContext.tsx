"use client";
import { createContext, useState } from "react";
import db from "@/data/db.json";
import { ICart, IProduct, blankCart } from "./interfaces";

const _products = db.products;

interface IAppContext {
	products: IProduct[];
	cart: ICart;
	getProductWithId: (id: number) => IProduct | undefined;
	handleAddProductToCart: (id: number) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [products, setProducts] = useState<IProduct[]>(_products);
	const [cart, setCart] = useState<ICart>(blankCart);

	const getProductWithId = (id: number): IProduct | undefined => {
		return products.find(m => m.id === id);
	}

	const handleAddProductToCart = (id: number) => {
		alert('adding to cart...' + id)
	}

	return (
		<AppContext.Provider
			value={{
				products,
				cart,
				getProductWithId,
				handleAddProductToCart
			}}
		>
			{children}
		</AppContext.Provider>
	);
};