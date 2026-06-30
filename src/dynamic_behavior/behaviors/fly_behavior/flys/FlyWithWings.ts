import type { FlyBehavior } from "../FlyBehavior";

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("Fly with wings");
  }
}

