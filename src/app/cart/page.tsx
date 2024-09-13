import { getCart } from "@/services/cart-service";

export default async function Cart() {
  const cartData = await getCart();

  console.log("cartData", cartData);

  return <h1>Cart</h1>;
}
