"use client";

import { CartItem } from "@/domain/models/cart-item";
import { Product } from "@/domain/models/product";
import { Avatar, Button, List, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import colors from "tailwindcss/colors";

interface ProductItemProps {
  product: CartItem;
  onRemoveProductClick: (productId: Product["id"]) => void;
  updateProductQtyHandler: (product: Product, qty: number) => void;
}

export default function ProductItem({
  product,
  onRemoveProductClick,
  updateProductQtyHandler,
}: ProductItemProps) {
  const [qty, setQty] = useState(product.quantity);

  const handleChangeQtyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQty = parseInt(e.target.value ?? 1);

    if (newQty > 0) {
      const diffQty = newQty - product.quantity;

      updateProductQtyHandler(product.product, diffQty);
    }

    setQty(newQty);
  };

  return (
    <List.Item key={product.product.id} className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Avatar
          img={product.product.image}
          alt="Neil image"
          rounded
          size="sm"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            {product.product.title}
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {product.product.description}
          </p>
        </div>
        <div className="basis-14">
          <TextInput
            type="number"
            min={1}
            sizing="sm"
            value={qty}
            onChange={handleChangeQtyHandler}
          />
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.product.price)}
        </div>
        <div className="flex gap-3">
          <Button
            outline
            color="gray"
            onClick={() => onRemoveProductClick(product.product.id)}
          >
            <FaTrash color={colors.red[700]} />
          </Button>
        </div>
      </div>
    </List.Item>
  );
}
