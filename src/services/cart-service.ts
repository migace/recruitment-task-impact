"use server";

import { AddProductToCartUseCase } from "@/domain/add-product-to-cart-use-case";
import { CreateCartUseCase } from "@/domain/create-cart-use-case";
import { GetCartUseCase } from "@/domain/get-cart-use-case";
import { Cart } from "@/domain/models/cart";
import { Product } from "@/domain/models/product";
import { RemoveProductFromCartUseCase } from "@/domain/remove-product-from-cart-use-case";
import { ICart } from "@/domain/types";
import container from "@/ioc/container";
import { Symbols } from "@/ioc/symbols";
import { CartMapper } from "@/mappers/cart-mapper";
import { cookies } from "next/headers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getCart(): Promise<any> {
  const cartId = cookies().get("cart-id")?.value ?? "";

  const getCartUseCase = container.get<GetCartUseCase>(Symbols.GetCartUseCase);
  const cart = await getCartUseCase.execute(cartId);

  return cart;
}

export async function addItemToCart(
  product: Product,
  quantity?: number
): Promise<ICart> {
  const addProductToCartUseCase = container.get<AddProductToCartUseCase>(
    Symbols.AddProductToCartUseCase
  );
  let cartId = cookies().get("cart-id")?.value;

  if (!cartId) {
    const cart = await createCart();

    cartId = cart.id;
  }

  return await addProductToCartUseCase.execute({ cartId, product, quantity });
}

export async function createCart(): Promise<ICart> {
  const getCartUseCase = container.get<CreateCartUseCase>(
    Symbols.CreateCartUseCase
  );
  const cart = await getCartUseCase.execute();

  cookies().set("cart-id", cart.id, { maxAge: 3600 });

  return cart;
}

export async function removeProductFromCart(productId: number): Promise<ICart> {
  const removeProductFromCartUseCase =
    container.get<RemoveProductFromCartUseCase>(
      Symbols.RemoveProductFromCartUseCase
    );
  const cartId = cookies().get("cart-id")?.value;

  return cartId
    ? await removeProductFromCartUseCase.execute({ cartId, productId })
    : CartMapper.toApi(new Cart());
}
