import { UnknownException } from "../../exceptions/unkown_pizza";
import { ChicagoStyleCheesePizza } from "../../pizzas/chicago_style_cheese_pizza";
import type { Pizza } from "../../pizzas/pizza";
import type { PizzaFactory } from "./pizza_factory";

export class ChicagoPizzaFactory implements PizzaFactory {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new ChicagoStyleCheesePizza();
      default:
        throw UnknownException;
    }

  }
}
