import type { Pizza } from "./pizza";
import type { SimplePizzaFactory } from "./pizzas/simple_pizza_factory";

export class PizzaShop {
  factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  orderPizza(type: string): Pizza {
    const pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}
