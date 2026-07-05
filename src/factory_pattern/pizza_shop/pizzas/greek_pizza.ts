import type { Pizza } from "../pizza";

export class GreekPizza implements Pizza {
  prepare(): void {
    console.log('preparing greek pizza');
  }

  bake(): void {
    console.log('baking greek pizza');
  }

  cut(): void {
    console.log('cutting greek pizza');
  }

  box(): void {
    console.log('boxing greek pizza');

  }
}
