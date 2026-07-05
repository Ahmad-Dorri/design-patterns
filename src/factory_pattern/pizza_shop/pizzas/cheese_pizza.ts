import type { Pizza } from "../pizza";

export class CheesePizza implements Pizza {
  prepare(): void {
    console.log('preparing cheese pizza');
  }

  bake(): void {
    console.log('baking cheese pizza');
  }

  cut(): void {
    console.log('cutting cheese pizza');
  }

  box(): void {
    console.log('boxing cheese pizza');

  }
}
