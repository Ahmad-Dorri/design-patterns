import type { WeaponBehavior } from "./behaviors/weapon_behavior/weapon_behavior";

abstract class Character {
  weapon!: WeaponBehavior;

  abstract fight(): void;

  useWeapon() {
    this.weapon.useWeapon();
  }

  setWeapon(w: WeaponBehavior) {
    this.weapon = w;
  }
}

export default Character;
