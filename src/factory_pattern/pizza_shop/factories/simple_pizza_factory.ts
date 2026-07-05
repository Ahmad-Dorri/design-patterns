import { UnknownException } from "../exceptions/unkown_pizza";
import type { Pizza } from "../pizzas/pizza";
import { CheesePizza } from "../pizzas/cheese_pizza";
import { GreekPizza } from "../pizzas/greek_pizza";
import { PepperoniPizza } from "../pizzas/pepperoni_pizza";
import type { PizzaFactory } from "./pizza_factory";

export class SimplePizzaFactory implements PizzaFactory {
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
