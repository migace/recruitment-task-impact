import "reflect-metadata";
import { ICategoryRepository } from "@/domain/repositories/category-repository";
import { Symbols } from "@/ioc/symbols";
import { inject, injectable } from "inversify";
import { CategoryMapper } from "@/mappers/category-mapper";

@injectable()
export class CategoryRepository implements ICategoryRepository {
  private apiBaseUrl: string;

  constructor(@inject(Symbols.ApiBaseUrl) apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async getCategories() {
    const response = await fetch(`${this.apiBaseUrl}/products/categories`);
    const data = await response.json();

    return data.map((category: string) => CategoryMapper.toEntity(category));
  }
}
