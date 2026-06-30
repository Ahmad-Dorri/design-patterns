import { FlyNoWay } from "./behaviors/fly_behavior/flys/FlyNoWay";
import { FlyWithRocket } from "./behaviors/fly_behavior/flys/FlyWithRocket";
import { Quack } from "./behaviors/quack_behavior/quacks/Quack";
import ModelDuck from "./ducks/ModelDock";


function main(): void {
  const model = new ModelDuck(new FlyNoWay(), new Quack());
  console.log(model.performFly());
  model.setFlyBehavior(new FlyWithRocket());
  console.log(model.performFly());


}

export default main;
