import { NYPizzaFactory } from "../factories/ny_pizza_factory";
import type { Pizza } from "../pizzas/pizza";
import { PizzaShop } from "./pizza_store";

export class NYStylePizzaStore extends PizzaShop {
  createPizza(type: string): Pizza {
    const factory = new NYPizzaFactory();
    return factory.createPizza(type);
  }
}
