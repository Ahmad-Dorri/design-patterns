import type { WeaponBehavior } from "../weapon_behavior";

export class Knife implements WeaponBehavior {
  useWeapon(): string {
    const usage = "Cutting with a Knife";
    console.log(usage);
    return usage;

  }
}
