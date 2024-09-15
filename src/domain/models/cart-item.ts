import { ICartItem } from "../types";
import { Product } from "./product";

export class CartItem implements ICartItem {
  constructor(public product: Product, public quantity: number) {}
}
