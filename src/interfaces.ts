export interface IProduct {
	id: number;
	category: string;
	brand: string;
	model: string;
	price: number;
}

export interface ICartProduct {
	productId: number;
	quantity: number;
}

export type ICustomerType = "normal" | "vip";

export interface ICart {
	customerType: ICustomerType;
	cartProducts: ICartProduct[];
}

export const blankCart: ICart = {
	customerType: "normal",
	cartProducts: []
}
