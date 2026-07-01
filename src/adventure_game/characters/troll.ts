import { Axe } from "../behaviors/weapon_behavior/weapons/axe";
import Character from "../character";

export class Troll extends Character {
  constructor() {
    super();
    this.setWeapon(new Axe());
  }

  fight(): void {
    console.log("Troll is fighting");

  }
}
