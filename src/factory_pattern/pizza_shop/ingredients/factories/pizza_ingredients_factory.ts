export interface PizzaIngredientsFactory {
  createDough(): string;
  createSauce(): string;
  createCheese(): string;
  createVeggies(): string[];
  createPepperoni(): string;
  createClam(): string;
}
