import type { QuackBehavior } from "../QuackBehavior";

export class QuackMute implements QuackBehavior {
  quack(): void {
    console.log("<< Silence >>");
  }
}
