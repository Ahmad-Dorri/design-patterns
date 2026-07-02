import { FlyWithRocket } from "./behaviors/fly_behavior/flys/FlyWithRocket";
import ModelDuck from "./ducks/ModelDock";


function main(): void {
  const model = new ModelDuck();
  model.performFly();
  model.setFlyBehavior(new FlyWithRocket());
  model.performFly();


}

export default main;
