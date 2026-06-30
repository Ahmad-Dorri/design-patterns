import type { FlyBehavior } from "./behaviors/fly_behavior/FlyBehavior";
import type { QuackBehavior } from "./behaviors/quack_behavior/QuackBehavior";

abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  swim() {
    console.log("All ducks can swim even the decoys!");
  }

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
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
