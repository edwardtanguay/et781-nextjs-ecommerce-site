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

export interface ICart {
	cartProducts: ICartProduct[];
}
