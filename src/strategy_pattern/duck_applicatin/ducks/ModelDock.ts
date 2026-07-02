import { FlyNoWay } from "../behaviors/fly_behavior/flys/FlyNoWay";
import { Quack } from "../behaviors/quack_behavior/quacks/Quack";
import Duck from "../Duck";

class ModelDuck extends Duck {
  constructor() {
    super();
    this.setFlyBehavior(new FlyNoWay());
    this.setQuackBehavior(new Quack());
  }
  display(): void {
    console.log("I'm a model duck");

  }
}

export default ModelDuck;
