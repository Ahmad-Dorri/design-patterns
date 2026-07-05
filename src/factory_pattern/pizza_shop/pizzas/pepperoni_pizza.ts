import type { Pizza } from "./pizza";

export class PepperoniPizza implements Pizza {
  prepare(): void {
    console.log('preparing pepperoni pizza');
  }

  bake(): void {
    console.log('baking pepperoni pizza');
  }

  cut(): void {
    console.log('cutting pepperoni pizza');
  }

  box(): void {
    console.log('boxing pepperoni pizza');

  }
}
