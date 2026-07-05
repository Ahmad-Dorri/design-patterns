import type { Pizza } from "./pizza";

export class ChicagoStyleCheesePizza implements Pizza {
  prepare(): void {
    console.log('preparing cheese pizza with lots of cheese (chicago style)');
  }

  bake(): void {
    console.log('bake chicago style cheese pizza');
  }

  cut(): void {
    console.log('cut chicago style cheese pizza');
  }

  box(): void {
    console.log('box chicago style cheese pizza');
  }
}
