import { ICart } from "../types";

export interface ICartRepository {
  get(cardId: string): Promise<ICart>;
  save(cart: ICart): Promise<ICart>;
  create(cart: ICart): Promise<ICart>;
}
