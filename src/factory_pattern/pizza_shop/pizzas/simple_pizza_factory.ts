import { UnknownException } from "../exceptions/unkown_pizza";
import type { Pizza } from "../pizza";
import { CheesePizza } from "./cheese_pizza";
import { GreekPizza } from "./greek_pizza";
import { PepperoniPizza } from "./pepperoni_pizza";

export class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza();
      case 'greek':
        return new GreekPizza();
      case 'pepperoni':
        return new PepperoniPizza();
      default:
        throw UnknownException;
    }
  }
}
