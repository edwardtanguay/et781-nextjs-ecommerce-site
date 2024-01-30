"use client";
import { createContext, useState } from "react";
import db from "@/data/db.json";
import { IProduct } from "./interfaces";

const _products = db.products;

console.log(_products);

interface IAppContext {
	products: IProduct[];
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [products, setProducts] = useState<IProduct[]>(_products);
	return (
		<AppContext.Provider
			value={{
				products
			}}
		>
			{children}
		</AppContext.Provider>
	);
};