"use client";

import { Product } from "@/domain/models/product";
import { addItemToCart } from "@/services/cart-service";
import { Button } from "flowbite-react";
import { SyntheticEvent } from "react";
import { toast } from "react-toastify";

type AddToCartButtonProps = {
  product: Product;
};

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addProductToCartClickHandler = (product: Product) => {
    addItemToCart(product);
    toast.success("Product added to cart");
  };

  return (
    <Button
      color="dark"
      onClick={(e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addProductToCartClickHandler(product);
      }}
      className="hover:opacity-50"
    >
      Add to cart
      <svg
        className="-mr-1 ml-2 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  );
};
