import type { FlyBehavior } from "../FlyBehavior";

export class FlyNoWay implements FlyBehavior {
  fly() {
    const message = "Can't Fly";
    console.log(message);
    return message;
  }
}
