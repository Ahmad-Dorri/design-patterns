import type { PizzaIngredientsFactory } from "./pizza_ingredients_factory";

export class NYPizzaIngredientsFactory implements PizzaIngredientsFactory {
  createDough(): string {
    return 'thin crust dough'
  }

  createSauce(): string {
    return 'mariana sauce'
  }

  createCheese(): string {
    return 'regiano cheese'
  }

  createVeggies(): string[] {
    return ['onion', 'garlic', 'mashroom', 'red paper'];
  }

  createPepperoni(): string {
    return 'sliced pepperoni'
  }

  createClam(): string {
    return 'fresh clams'
  }
}
