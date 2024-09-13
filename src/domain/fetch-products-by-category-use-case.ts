import { Symbols } from "@/ioc/symbols";
import { inject, injectable } from "inversify";
import { IUseCase } from "./use-case";
import { Product } from "./models/product";
import { ProductRepository } from "@/repositories/product-repository";

@injectable()
export class FetchProductsByCategoryUseCase
  implements IUseCase<string, Product[]>
{
  constructor(
    @inject(Symbols.ProductRepository)
    private readonly productRepository: ProductRepository
  ) {}

  async execute(categoryName: string) {
    return this.productRepository.getProductsByCategory(categoryName);
  }
}
