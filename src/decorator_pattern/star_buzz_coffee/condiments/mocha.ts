import type { Beverage } from "../beverage";
import { CondimentDecorator } from "../beverages/condiment_decorator";

export class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost(): number {
    return 0.20 + this.beverage.cost();
  }
}
