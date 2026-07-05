import { PizzaShop } from "./pizza_shop";
import { SimplePizzaFactory } from "./pizzas/simple_pizza_factory";

export function main() {
  const pizzaFactory = new SimplePizzaFactory();
  const shop = new PizzaShop(pizzaFactory);
  shop.orderPizza('cheese');
}
