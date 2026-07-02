import type { QuackBehavior } from "../QuackBehavior";

export class Squeak implements QuackBehavior {
  quack() {
    const message = "squeak";
    console.log(message);
    return message;
  }
}
