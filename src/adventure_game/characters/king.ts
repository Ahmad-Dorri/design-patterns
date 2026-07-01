import { Sword } from "../behaviors/weapon_behavior/weapons/sword";
import Character from "../character";

export class King extends Character {
  constructor() {
    super();
    this.setWeapon(new Sword());
  }

  fight(): void {
    console.log("king is fighting");
  }
}
