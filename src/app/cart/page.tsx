import { getCart } from "@/services/cart-service";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

import Cart from "./cart";

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="text-3xl my-8">Cart</h1>
      {cart.items.length === 0 ? (
        <Alert color="failure" icon={HiInformationCircle}>
          Your cart is empty.
        </Alert>
      ) : (
        <Cart initialCart={cart} />
      )}
    </div>
  );
}
