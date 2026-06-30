import { FlyWithWings } from "./behaviors/fly_behavior/flys/FlyWithWings";
import { Quack } from "./behaviors/quack_behavior/quacks/Quack";
import MallardDuck from "./ducks/MallardDuck";


function main(): void {
  const mallard = new MallardDuck(new FlyWithWings(), new Quack());

  mallard.performFly();
  mallard.performQuack();
}

export default main;
