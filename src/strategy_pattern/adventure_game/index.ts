import { Knife } from "./behaviors/weapon_behavior/weapons/knife";
import { King } from "./characters/king"

const main = () => {
  const king = new King();
  king.fight();
  king.useWeapon();
  king.setWeapon(new Knife());
  king.useWeapon();
}

export default main;
