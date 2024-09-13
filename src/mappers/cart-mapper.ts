import { Cart } from "@/domain/models/cart";
import { ProductMapper } from "./product-mapper";

export class CartMapper {
  static toEntity(apiResponse: any): Cart {
    const newCart = new Cart(apiResponse.id);

    apiResponse.items.forEach((item: any) => {
      newCart.addItem(item.product, item.quantity);
    });

    return newCart;
  }

  static toApi(cart: Cart): any {
    console.log("cart to api", cart);
    console.log("cart items", {
      id: cart.id,
      items: cart.items.map((item) => ({
        product: ProductMapper.toApi(item.product),
        quantity: item.quantity,
      })),
    });
    return {
      id: cart.id,
      items: cart.items.map((item) => ({
        product: ProductMapper.toApi(item.product),
        quantity: item.quantity,
      })),
    };
  }
}
