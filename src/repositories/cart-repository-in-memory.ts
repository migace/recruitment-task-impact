import { Cart } from "@/domain/models/cart";
import { ICartRepository } from "@/domain/repositories/cart-repository";
import { injectable } from "inversify";

@injectable()
export class CartRepositoryInMemory implements ICartRepository {
  private storageKey = "cart";

  async fetchCart() {
    const cart = localStorage.getItem(this.storageKey);

    return cart ? JSON.parse(cart) : new Cart();
  }

  async saveCart(cart: Cart): Promise<void> {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}
