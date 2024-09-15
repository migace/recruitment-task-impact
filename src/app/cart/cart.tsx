"use client";

import { List } from "flowbite-react";
import ProductItem from "./ProductItem";
import { addItemToCart, removeProductFromCart } from "@/services/cart-service";
import { Product } from "@/domain/models/product";
import { useState } from "react";
import { ICart } from "@/domain/types";

interface CartProps {
  initialCart: ICart;
}

export default function Cart({ initialCart }: CartProps) {
  const [cart, setCart] = useState(initialCart);

  const removeItemClickHandler = async (id: Product["id"]) => {
    const updatedCart = await removeProductFromCart(id);

    setCart(updatedCart);
  };

  const updateProductQtyHandler = async (product: Product, qty: number) => {
    const updatedCart = await addItemToCart(product, qty);

    setCart(updatedCart);
  };

  return (
    <>
      <List
        unstyled
        className="divide-y divide-gray-200 dark:divide-gray-700 mb-4"
      >
        {cart?.items?.map((item) => (
          <ProductItem
            key={item.product.id}
            product={item}
            onRemoveProductClick={removeItemClickHandler}
            updateProductQtyHandler={updateProductQtyHandler}
          />
        ))}
      </List>
      <p className="text-xl">
        Sum:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(cart.totalPrice)}
      </p>
    </>
  );
}
