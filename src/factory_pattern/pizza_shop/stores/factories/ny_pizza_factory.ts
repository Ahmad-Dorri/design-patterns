import { UnknownException } from "../exceptions/unkown_pizza";
import { NYStyleCheesePizza } from "../pizzas/ny_style_cheese_pizza";
import type { Pizza } from "../pizzas/pizza";
import type { PizzaFactory } from "./pizza_factory";

export class NYPizzaFactory implements PizzaFactory {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new NYStyleCheesePizza();
      default:
        throw UnknownException;
    }
  }
}
