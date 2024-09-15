import { Symbols } from "@/ioc/symbols";
import { Cart } from "./models/cart";
import { IUseCase } from "./use-case";
import { CartRepository } from "@/repositories/cart-repository";
import { inject, injectable } from "inversify";
import { ICart } from "./types";

@injectable()
export class CreateCartUseCase implements IUseCase<void, ICart> {
  constructor(
    @inject(Symbols.CartRepository)
    private cartRepository: CartRepository
  ) {}

  async execute(): Promise<ICart> {
    return await this.cartRepository.create(new Cart());
  }
}
