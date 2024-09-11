import { Symbols } from "@/ioc/symbols";
import { inject, injectable } from "inversify";

@injectable()
export class CategoryRepository {
  private apiBaseUrl: string;

  constructor(@inject(Symbols.ApiBaseUrl) apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async getCategories() {
    const response = await fetch(`${this.apiBaseUrl}/products/categories`);
    return await response.json();
  }
}
