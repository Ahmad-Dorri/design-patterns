import type { WeaponBehavior } from "../weapon_behavior";

export class BowAndArrow implements WeaponBehavior {
  useWeapon(): string {
    const usage = "Throw bows using arrow";
    console.log(usage);
    return usage;

  }
}
