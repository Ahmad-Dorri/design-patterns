import { ChicagoPizzaFactory } from "./factories/chicago_pizza_factory";
import type { Pizza } from "../pizzas/pizza";
import { PizzaShop } from "./pizza_store";

export class ChicagoStylePizzaStore extends PizzaShop {
  createPizza(type: string): Pizza {
    const factory = new ChicagoPizzaFactory();
    return factory.createPizza(type);
  }
}
