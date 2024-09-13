import { Cart } from "../models/cart";

export interface ICartRepository {
  getCart(cardId: string): Promise<Cart>;
  saveCart(cart: Cart): Promise<void>;
}
