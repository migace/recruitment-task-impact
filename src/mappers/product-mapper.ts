import { Product } from "@/domain/models/product";

export class ProductMapper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static toEntity(apiResponse: any): Product {
    return new Product(
      apiResponse.id,
      apiResponse.title,
      apiResponse.price,
      apiResponse.description,
      apiResponse.category,
      apiResponse.image,
      apiResponse.productsQty
    );
  }

  static toApi(product: Product): unknown {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      productsQty: product.productsQty,
    };
  }
}
