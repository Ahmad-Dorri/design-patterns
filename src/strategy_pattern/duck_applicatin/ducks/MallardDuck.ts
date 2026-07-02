import { FlyWithWings } from "../behaviors/fly_behavior/flys/FlyWithWings";
import { Quack } from "../behaviors/quack_behavior/quacks/Quack";
import Duck from "../Duck";

class MallardDuck extends Duck {
  constructor() {
    super();
    this.setFlyBehavior(new FlyWithWings());
    this.setQuackBehavior(new Quack());
  }
  display(): void {
    console.log("A real mallard duck");
  }
}

export default MallardDuck;
