import { Cart } from "@/domain/models/cart";
import { ICartRepository } from "@/domain/repositories/cart-repository";
import { CartMapper } from "@/mappers/cart-mapper";
import { injectable } from "inversify";

@injectable()
export class CartRepositoryInMemory implements ICartRepository {
  private store: { [key: string]: string } = {};

  async getCart(cartId: string = ""): Promise<Cart> {
    const cart = cartId && this.store[cartId];

    console.log("not cart!!!!!!", cart);

    if (!cart) {
      const newCart = new Cart(cartId);

      this.saveCart(newCart);

      return newCart;
    }

    console.log("csaiudhosiadjioa", cart, this.store);

    return CartMapper.toEntity(JSON.parse(cart));
  }

  async saveCart(cart: Cart): Promise<void> {
    const test = CartMapper.toApi(cart);
    console.log("dmaopksop  ko3i121", test);
    console.log(test.items);
    this.store[cart.id] = JSON.stringify(test);

    console.log("saved cart", this.store[cart.id]);
  }
}
