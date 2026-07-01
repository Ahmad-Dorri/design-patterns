import type { WeaponBehavior } from "../weapon_behavior";

export class Axe implements WeaponBehavior {
  useWeapon(): string {
    const usage = "Chop wood with axe";
    console.log(usage);
    return usage;

  }
}
