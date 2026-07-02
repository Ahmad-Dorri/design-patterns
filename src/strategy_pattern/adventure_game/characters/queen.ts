import { BowAndArrow } from "../behaviors/weapon_behavior/weapons/bow_and_arrow";
import Character from "../character";

export class Queen extends Character {
  constructor() {
    super();
    this.setWeapon(new BowAndArrow());
  }

  fight(): void {
    console.log("Queen is fighting");

  }
}
