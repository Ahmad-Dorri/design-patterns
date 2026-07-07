import type { Pizza } from "../pizzas/pizza";

export interface PizzaFactory {
  createPizza(type: string): Pizza;
}
