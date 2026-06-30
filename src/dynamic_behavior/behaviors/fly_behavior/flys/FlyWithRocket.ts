import type { FlyBehavior } from "../FlyBehavior";

export class FlyWithRocket implements FlyBehavior {
  fly() {
    const message = "I'm flying with a rocket";
    console.log(message);
    return message;
  }
}
