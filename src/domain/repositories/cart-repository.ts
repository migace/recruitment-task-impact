import { Cart } from "../models/cart";

export interface ICartRepository {
  fetchCart(): Promise<Cart>;
  saveCart(cart: Cart): Promise<void>;
}
