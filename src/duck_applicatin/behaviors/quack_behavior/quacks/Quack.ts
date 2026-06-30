import type { QuackBehavior } from "../QuackBehavior";

export class Quack implements QuackBehavior {
  quack() {
    const message = "quack";
    console.log(message);
    return message;
  }
}
