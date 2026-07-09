import type { FlyBehavior } from "./behaviors/fly_behavior/FlyBehavior";
import type { QuackBehavior } from "./behaviors/quack_behavior/QuackBehavior";

abstract class Duck {
  private flyBehavior!: FlyBehavior;
  private quackBehavior!: QuackBehavior;

  swim() {
    console.log("All ducks can swim even the decoys!");
  }

  performFly(): string {
    return this.flyBehavior.fly();
  }

  performQuack(): string {
    return this.quackBehavior.quack();
  }

  setFlyBehavior(behavior: FlyBehavior) {
    this.flyBehavior = behavior;
  }

  setQuackBehavior(behavior: QuackBehavior) {
    this.quackBehavior = behavior;
  }

  abstract display(): void;
}

export default Duck;
