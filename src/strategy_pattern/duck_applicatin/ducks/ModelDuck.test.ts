import { it, expect, describe, expectTypeOf } from 'vitest'
import ModelDuck from './ModelDock'
import type Duck from '../Duck';
import { FlyWithWings } from '../behaviors/fly_behavior/flys/FlyWithWings';

describe('ModelDuck', () => {

  const model = new ModelDuck();
  it("should extends Duck class", () => {
    expectTypeOf(model).toExtend<Duck>();
  })
  it("can't fly", () => {
    expect(model.performFly()).toBe("Can't Fly");
  })
  it('can fly if we change behavior to fly with wings', () => {
    model.setFlyBehavior(new FlyWithWings());
    expect(model.performFly()).not.toBe("Can't Fly");
  })
})
