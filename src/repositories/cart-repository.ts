import { Cart } from "@/domain/models/cart";
import { ICartRepository } from "@/domain/repositories/cart-repository";
import { CartMapper } from "@/mappers/cart-mapper";
import { injectable } from "inversify";
import { prisma } from "@/lib/prisma";
import { ICart } from "@/domain/types";

@injectable()
export class CartRepository implements ICartRepository {
  async get(cartId: string): Promise<ICart> {
    const cart = await prisma?.cart.findUnique({
      where: {
        id: cartId,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart) {
      throw new Error("Cart not found.");
    }

    return cart;
  }

  async create(cart: Cart): Promise<ICart> {
    const createdCart = await prisma?.cart.create(
      CartMapper.toCreatePrisma(cart)
    );

    return CartMapper.toApi(createdCart);
  }

  async save(cart: Cart): Promise<ICart> {
    const cartExists = await this.get(cart.id);

    if (!cartExists) {
      throw new Error("Cart not found.");
    }

    const savedCart = await prisma?.cart.update({
      where: {
        id: cartExists.id,
      },
      ...CartMapper.toUpdatePrisma(cart),
    });

    return CartMapper.toApi(savedCart);
  }

  async removeProducts(cartId: string, productIds: number[]): Promise<ICart> {
    const cartExists = await this.get(cartId);

    if (!cartExists) {
      throw new Error("Cart not found.");
    }

    const savedCart = await prisma?.cart.update({
      where: {
        id: cartExists.id,
      },
      ...CartMapper.toRemovePrisma(productIds),
    });

    return CartMapper.toApi(savedCart);
  }
}
