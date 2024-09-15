import { ICategory } from "../types";

export interface ICategoryRepository {
  getCategories: () => Promise<ICategory[]>;
}
