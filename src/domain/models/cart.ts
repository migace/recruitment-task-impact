import { ICart } from "../types";
import { CartItem } from "./cart-item";
import { Product } from "./product";

export class Cart implements ICart {
  id: string = "";
  items: CartItem[] = [];
  totalPrice: number = 0;

  constructor(cartId?: string) {
    this.id = cartId || crypto.randomUUID();
  }

  addItem(product: Product, quantity: number = 1): void {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }

    this.calculateTotalPrice();
  }

  removeItem(productId: number): void {
    this.items = this.items.filter((item) => item.product.id !== productId);
    this.calculateTotalPrice();
  }

  updateItemQuantity(productId: number, quantity: number): void {
    const item = this.items.find((item) => item.product.id === productId);

    if (item) {
      item.quantity = quantity;

      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.calculateTotalPrice();
      }
    }
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
