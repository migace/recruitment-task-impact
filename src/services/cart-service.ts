"use server";

import { AddProductToCartUseCase } from "@/domain/add-product-to-cart-use-case";
import { CreateCartUseCase } from "@/domain/create-cart-use-case";
import { GetCartUseCase } from "@/domain/get-cart-use-case";
import { Cart } from "@/domain/models/cart";
import { Product } from "@/domain/models/product";
import container from "@/ioc/container";
import { Symbols } from "@/ioc/symbols";
import { cookies } from "next/headers";
// import { cookies } from "next/headers";

export async function getCart(): Promise<Cart> {
  const cartId = cookies().get("cart-id")?.value;

  console.log("getCart(): cartId", cartId);

  if (!cartId) {
    throw new Error("Cart not found");
  }

  const getCartUseCase = container.get<GetCartUseCase>(Symbols.GetCartUseCase);
  const cart = await getCartUseCase.execute(cartId);

  // development only
  console.log("Server get cart: ", cart);

  return cart;
}

export async function addItemToCart(
  product: Product,
  quantity?: number
): Promise<void> {
  const addProductToCartUseCase = container.get<AddProductToCartUseCase>(
    Symbols.AddProductToCartUseCase
  );
  let cartId = cookies().get("cart-id")?.value;

  console.log("read cart id from cookie...", cartId);

  if (!cartId) {
    const cart = await createCart();

    cartId = cart.id;
  }

  addProductToCartUseCase.execute({ cartId, product, quantity });

  //return cart;
}

export async function createCart(): Promise<Cart> {
  const getCartUseCase = container.get<CreateCartUseCase>(
    Symbols.CreateCartUseCase
  );
  const cart = await getCartUseCase.execute();
  cookies().set("cart-id", cart.id);

  // development only
  console.log("Server create a new cart: ", cart);

  return cart;
}
