import { MenuComponent } from "./menu_component";

export class MenuItem extends MenuComponent {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  constructor(
    { name, description, vegetarian, price }:
      { name: string, description: string, vegetarian: boolean, price: number }
  ) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public isVegetarian(): boolean {
    return this.vegetarian;
  }

  public getPrice(): number {
    return this.price;

  }

  public print(): void {
    console.log(`${this.getName()} ${this.isVegetarian() ? "(v)" : ""}, ${this.getPrice()} -- ${this.getDescription()}`);
  }

}
