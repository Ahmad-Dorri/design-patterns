import { CaffeineBeverage } from "./caffeine_beverage";

export class Coffee extends CaffeineBeverage {
  brew() {
    console.log('Driping coffee through filter');

  }

  addCondiments() {
    console.log('Adding sugar and milk');

  }
}
