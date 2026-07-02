import { Sword } from "../behaviors/weapon_behavior/weapons/sword";
import Character from "../character";

export class Knight extends Character {
  constructor() {
    super();
    this.setWeapon(new Sword());
  }

  fight(): void {
    console.log("knight is fighting");
  }
}
