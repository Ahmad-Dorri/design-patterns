import type { Beverage } from "../beverage";
import { CondimentDecorator } from "../beverages/condiment_decorator";

export class Whip extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Whip';
  }

  cost(): number {
    return 0.10 + this.beverage.cost();
  }
}
