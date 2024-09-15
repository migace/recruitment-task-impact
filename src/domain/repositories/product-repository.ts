import { IProduct } from "../types";

export interface IProductRepository {
  getProductsByCategory: (categoryName: string) => Promise<IProduct[]>;
}
