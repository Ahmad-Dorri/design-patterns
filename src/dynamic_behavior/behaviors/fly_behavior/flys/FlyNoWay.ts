import type { FlyBehavior } from "../FlyBehavior";

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("Can't Fly");
  }
}
