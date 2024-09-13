import { Symbols } from "@/ioc/symbols";
import { Cart } from "./models/cart";
import { IUseCase } from "./use-case";
import { CartRepositoryInMemory } from "@/repositories/cart-repository-in-memory";
import { inject, injectable } from "inversify";

@injectable()
export class CreateCartUseCase implements IUseCase<void, Cart> {
  constructor(
    @inject(Symbols.CartRepository)
    private cartRepository: CartRepositoryInMemory
  ) {}

  async execute(): Promise<Cart> {
    const cart = await this.cartRepository.getCart();

    return cart;
  }
}
