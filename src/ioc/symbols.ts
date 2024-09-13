export const Symbols = {
  ApiBaseUrl: Symbol.for("ApiBaseUrl"),
  CategoriesRepository: Symbol.for("CategoriesRepository"),
  ProductRepository: Symbol.for("ProductRepository"),
  FetchCategoriesUseCase: Symbol.for("FetchCategoriesUseCase"),
  FetchProductsByCategoryUseCase: Symbol.for("FetchProductsByCategoryUseCase"),
  CartRepository: Symbol.for("CartRepository"),
  AddProductToCartUseCase: Symbol.for("AddProductToCartUseCase"),
  GetCartUseCase: Symbol.for("GetCartUseCase"),
  CreateCartUseCase: Symbol.for("CreateCartUseCase"),
};
