import type { FetchCategoriesUseCase } from "@/domain/fetch-categories-use-case";
import { Category } from "@/domain/models/category";
import container from "@/ioc/container";
import { Symbols } from "@/ioc/symbols";

export async function fetchCategories(): Promise<Category[]> {
  const fetchCategoriesUseCase = container.get<FetchCategoriesUseCase>(
    Symbols.FetchCategoriesUseCase
  );
  const categories = await fetchCategoriesUseCase.execute();

  return categories;
}
