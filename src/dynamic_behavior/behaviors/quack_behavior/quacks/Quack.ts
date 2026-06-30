import type { QuackBehavior } from "../QuackBehavior";

export class Quack implements QuackBehavior {
  quack(): void {
    console.log("quack");
  }
}
