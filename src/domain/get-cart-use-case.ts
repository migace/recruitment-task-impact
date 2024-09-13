import { Symbols } from "@/ioc/symbols";
import { Cart } from "./models/cart";
import { IUseCase } from "./use-case";
import { CartRepositoryInMemory } from "@/repositories/cart-repository-in-memory";
import { inject, injectable } from "inversify";

@injectable()
export class GetCartUseCase implements IUseCase<string, Cart> {
  constructor(
    @inject(Symbols.CartRepository)
    private cartRepository: CartRepositoryInMemory
  ) {}

  async execute(cartId: string): Promise<Cart> {
    const cart = await this.cartRepository.getCart(cartId);

    return cart;
  }
}
