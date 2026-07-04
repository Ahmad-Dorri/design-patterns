import type { Beverage } from "../beverage";
import { CondimentDecorator } from "../beverages/condiment_decorator";

export class Soy extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Soy';
  }

  cost(): number {
    return 0.15 + this.beverage.cost();
  }
}
