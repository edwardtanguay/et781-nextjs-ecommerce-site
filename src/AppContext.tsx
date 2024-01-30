"use client";
import { createContext, useState } from "react";
import db from "@/data/db.json";
import { ICart, IProduct, blankCart } from "./interfaces";

const _products = db.products;

console.log(_products);

interface IAppContext {
	products: IProduct[];
	cart: ICart;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [products, setProducts] = useState<IProduct[]>(_products);
	const [cart, setCart] = useState<ICart>(blankCart)
	return (
		<AppContext.Provider
			value={{
				products,
				cart
			}}
		>
			{children}
		</AppContext.Provider>
	);
};