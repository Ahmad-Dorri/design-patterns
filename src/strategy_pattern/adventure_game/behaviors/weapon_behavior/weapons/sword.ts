import type { WeaponBehavior } from "../weapon_behavior";

export class Sword implements WeaponBehavior {
  useWeapon(): string {
    const usage = "Swinging a sword";
    console.log(usage);
    return usage;

  }
}
