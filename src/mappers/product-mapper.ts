import { Product } from "@/domain/models/product";
import { IProduct } from "@/domain/types";

export class ProductMapper {
  static toEntity(apiResponse: IProduct): Product {
    return new Product(
      apiResponse.id,
      apiResponse.title,
      apiResponse.price,
      apiResponse.description,
      apiResponse.category,
      apiResponse.image
    );
  }

  static toApi(product: Product): Product {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    };
  }
}
