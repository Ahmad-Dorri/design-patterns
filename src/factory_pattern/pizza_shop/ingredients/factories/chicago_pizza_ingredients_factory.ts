import type { PizzaIngredientsFactory } from "./pizza_ingredients_factory";

export class ChicagoPizzaIngredientsFactory implements PizzaIngredientsFactory {
  createDough(): string {
    return 'thick crust dough'
  }
  createSauce(): string {
    return 'plum tomato sauce'
  }
  createCheese(): string {
    return 'mozzarella'
  }
  createVeggies(): string[] {
    return ['spanish', 'egg plant', 'black olives']
  }
  createPepperoni(): string {
    return 'sliced pepperoni'
  }
  createClam(): string {
    return 'frozen clams'
  }
}
