import { Symbols } from "@/ioc/symbols";
import { Cart } from "./models/cart";
import { IUseCase } from "./use-case";
import { CartRepositoryInMemory } from "@/repositories/cart-repository-in-memory";
import { inject, injectable } from "inversify";
import { Product } from "./models/product";

@injectable()
export class AddProductToCartUseCase
  implements
    IUseCase<{ cartId: string; product: Product; quantity: number }, Cart>
{
  constructor(
    @inject(Symbols.CartRepository)
    private cartRepository: CartRepositoryInMemory
  ) {}

  async execute({
    cartId,
    product,
    quantity = 1,
  }: {
    cartId: string;
    product: Product;
    quantity?: number;
  }) {
    const cart = await this.cartRepository.getCart(cartId);

    console.log("cart content", cart);

    cart.addItem(product, quantity);

    console.log("cart content", cart);

    await this.cartRepository.saveCart(cart);

    return cart;
  }
}
