import { Category } from "../models/category";

export interface ICategoryRepository {
  fetchCategories: () => Promise<Category[]>;
}
