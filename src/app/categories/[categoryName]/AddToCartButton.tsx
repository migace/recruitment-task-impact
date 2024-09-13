"use client";

import { addItemToCart } from "@/services/cart-service";
import { Button } from "flowbite-react";

type AddToCartButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
};

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addProductToCartClickHandler = (product: any) => {
    console.log("diniewndienid");
    addItemToCart(product);
  };

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        addProductToCartClickHandler(product);
      }}
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
