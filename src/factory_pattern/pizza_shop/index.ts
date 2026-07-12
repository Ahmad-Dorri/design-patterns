import { SimplePizzaFactory } from "./stores/factories/simple_pizza_factory";

export function main() {
  const factory = new SimplePizzaFactory();
  const pizza = factory.createPizza('pepperoni');
  pizza.prepare();
  pizza.bake();
  pizza.cut();
  pizza.box();
}
