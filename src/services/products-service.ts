import { FetchProductsByCategoryUseCase } from "@/domain/fetch-products-by-category-use-case";
import { Product } from "@/domain/models/product";
import container from "@/ioc/container";
import { Symbols } from "@/ioc/symbols";

export async function fetchProductsByCategories(
  categoryName: string
): Promise<Product[]> {
  const fetchProductsByCategoriesUseCase =
    container.get<FetchProductsByCategoryUseCase>(
      Symbols.FetchProductsByCategoryUseCase
    );
  const products = await fetchProductsByCategoriesUseCase.execute(categoryName);

  // development only
  console.log("Server fetched products by category: ", products.slice(0, 2));

  return products;
}
