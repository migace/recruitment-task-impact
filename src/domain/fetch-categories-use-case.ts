import { Symbols } from "@/ioc/symbols";
import { CategoryRepository } from "@/repositories/category-repository";
import { inject, injectable } from "inversify";
import { IUseCase } from "./use-case";
import { Category } from "./models/category";

@injectable()
export class FetchCategoriesUseCase implements IUseCase<void, Category> {
  constructor(
    @inject(Symbols.CategoriesRepository)
    private readonly categoriesRepository: CategoryRepository
  ) {}

  async execute() {
    return this.categoriesRepository.getCategories();
  }
}
