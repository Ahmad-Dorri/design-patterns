import type { FlyBehavior } from "../FlyBehavior";

export class FlyWithWings implements FlyBehavior {
  fly() {
    const message = "Fly with wings";
    console.log(message);
    return message;
  }
}

