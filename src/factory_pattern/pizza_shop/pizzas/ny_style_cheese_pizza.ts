import type { Pizza } from "./pizza";

export class NYStyleCheesePizza implements Pizza {
  prepare(): void {
    console.log('prepare cheese pizza with little cheese (ny style)');
  }

  bake(): void {
    console.log('bake ny style cheese pizza');
  }

  cut(): void {
    console.log('cut ny style cheese pizza');
  }

  box(): void {
    console.log('box ny style cheese pizza');

  }
}
