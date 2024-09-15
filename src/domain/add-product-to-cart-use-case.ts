import { Symbols } from "@/ioc/symbols";
import { Cart } from "./models/cart";
import { IUseCase } from "./use-case";
import { CartRepository } from "@/repositories/cart-repository";
import { inject, injectable } from "inversify";
import { Product } from "./models/product";
import { ICart } from "./types";
import { CartMapper } from "@/mappers/cart-mapper";

@injectable()
export class AddProductToCartUseCase
  implements
    IUseCase<{ cartId: string; product: Product; quantity: number }, ICart>
{
  constructor(
    @inject(Symbols.CartRepository)
    private cartRepository: CartRepository
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
    let cart: ICart;

    try {
      cart = await this.cartRepository.get(cartId);
    } catch (err) {
      cart = await this.cartRepository.create(new Cart());
    }

    const cartObj = CartMapper.toEntity(cart);

    cartObj.addItem(product, quantity);

    return this.cartRepository.save(cartObj);
  }
}
