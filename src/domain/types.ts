export interface ICart {
  id: string;
  totalPrice: number;
  items?: ICartItem[];
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ICategory {
  name: string;
}
