import { Category } from "../models/category";

export interface ICategoryRepository {
  getCategories: () => Promise<Category[]>;
}
