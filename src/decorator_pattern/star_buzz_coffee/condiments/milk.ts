import type { Beverage } from "../beverage";
import { CondimentDecorator } from "../beverages/condiment_decorator";

export class Milk extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Milk';
  }

  cost(): number {
    return 0.10 + this.beverage.cost();
  }
}
