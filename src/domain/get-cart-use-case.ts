import { Symbols } from "@/ioc/symbols";
import { Cart } from "./models/cart";
import { IUseCase } from "./use-case";
import { CartRepository } from "@/repositories/cart-repository";
import { inject, injectable } from "inversify";
import { ICart } from "./types";

@injectable()
export class GetCartUseCase implements IUseCase<string, ICart> {
  constructor(
    @inject(Symbols.CartRepository)
    private cartRepository: CartRepository
  ) {}

  async execute(cartId: string): Promise<ICart> {
    let cart: ICart;

    try {
      cart = await this.cartRepository.get(cartId);
    } catch (err) {
      cart = await this.cartRepository.create(new Cart());
    }

    return cart;
  }
}
