import { Product } from "../models/product";

export interface IProductRepository {
  getProductsByCategory: (categoryName: string) => Promise<Product[]>;
}
