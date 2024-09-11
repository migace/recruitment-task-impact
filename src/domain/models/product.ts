export class Product {
  public id: string | undefined;
  public image: string | undefined;

  constructor(public name: string, public price: number) {
    this.id = crypto.randomUUID();
  }
}
