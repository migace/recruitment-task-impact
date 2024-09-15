import { IProduct } from "../types";

export class Product implements IProduct {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string,
    public category: string,
    public image: string
  ) {}
}
