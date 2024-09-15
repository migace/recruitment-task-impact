import { Container } from "inversify";
import { Symbols } from "./symbols";
import { CategoryRepository } from "@/repositories/category-repository";
import { FetchCategoriesUseCase } from "@/domain/fetch-categories-use-case";
import { ProductRepository } from "@/repositories/product-repository";
import { FetchProductsByCategoryUseCase } from "@/domain/fetch-products-by-category-use-case";
import { AddProductToCartUseCase } from "@/domain/add-product-to-cart-use-case";
import { CartRepository } from "@/repositories/cart-repository";
import { GetCartUseCase } from "@/domain/get-cart-use-case";
import { CreateCartUseCase } from "@/domain/create-cart-use-case";
import { RemoveProductFromCartUseCase } from "@/domain/remove-product-from-cart-use-case";

const container = new Container({
  defaultScope: "Singleton",
});

container
  .bind<string>(Symbols.ApiBaseUrl)
  .toConstantValue(process.env.NEXT_PUBLIC_API_BASE_URL ?? "");
container.bind(Symbols.CategoriesRepository).to(CategoryRepository);
container.bind(Symbols.FetchCategoriesUseCase).to(FetchCategoriesUseCase);
container.bind(Symbols.ProductRepository).to(ProductRepository);
container
  .bind(Symbols.FetchProductsByCategoryUseCase)
  .to(FetchProductsByCategoryUseCase);
container.bind(Symbols.AddProductToCartUseCase).to(AddProductToCartUseCase);
container.bind(Symbols.CartRepository).to(CartRepository);
container.bind(Symbols.GetCartUseCase).to(GetCartUseCase);
container.bind(Symbols.CreateCartUseCase).to(CreateCartUseCase);
container
  .bind(Symbols.RemoveProductFromCartUseCase)
  .to(RemoveProductFromCartUseCase);

export default container;
