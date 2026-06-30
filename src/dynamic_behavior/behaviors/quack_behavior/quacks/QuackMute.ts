import type { QuackBehavior } from "../QuackBehavior";

export class QuackMute implements QuackBehavior {
  quack() {
    const message = "<< Silence >>";
    console.log(message);
    return message;
  }
}
