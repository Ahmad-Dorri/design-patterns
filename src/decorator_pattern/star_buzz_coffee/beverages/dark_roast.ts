import { Beverage } from "../beverage";

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this._description = 'DarkRoast';
  }

  cost(): number {
    return 0.99;
  }
}
