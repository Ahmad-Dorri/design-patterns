import { SimplePizzaFactory } from "./pizzas/simple_pizza_factory";

export function main() {
  const pizza = SimplePizzaFactory.createPizza('pepperoni');
  pizza.prepare();
  pizza.bake();
  pizza.cut();
  pizza.box();
}
