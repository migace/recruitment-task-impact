import { Symbols } from "@/ioc/symbols";
import { IUseCase } from "./use-case";
import { CartRepository } from "@/repositories/cart-repository";
import { inject, injectable } from "inversify";
import { ICart } from "./types";

@injectable()
export class RemoveProductFromCartUseCase
  implements IUseCase<{ cartId: string; productId: number }, ICart>
{
  constructor(
    @inject(Symbols.CartRepository)
    private cartRepository: CartRepository
  ) {}

  async execute({ cartId, productId }: { cartId: string; productId: number }) {
    return await this.cartRepository.removeProducts(cartId, [productId]);
  }
}
