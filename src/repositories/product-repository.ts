import { IProductRepository } from "@/domain/repositories/product-repository";
import { IProduct } from "@/domain/types";
import { Symbols } from "@/ioc/symbols";
import { ProductMapper } from "@/mappers/product-mapper";
import { inject, injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class ProductRepository implements IProductRepository {
  private apiBaseUrl: string;

  constructor(@inject(Symbols.ApiBaseUrl) apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async getProductsByCategory(categoryName: string) {
    const response = await fetch(
      `${this.apiBaseUrl}/products/category/${categoryName}`
    );
    const data = await response.json();

    return data.map((product: IProduct) => ProductMapper.toEntity(product));
  }
}
