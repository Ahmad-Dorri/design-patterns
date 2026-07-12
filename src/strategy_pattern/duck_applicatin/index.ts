import { FlyWithRocket } from "./behaviors/fly_behavior/flys/FlyWithRocket";
import ModelDuck from "./ducks/ModelDock";


export function duckStrategyPattern(): void {
  const model = new ModelDuck();
  model.performFly();
  model.setFlyBehavior(new FlyWithRocket());
  model.performFly();


}
