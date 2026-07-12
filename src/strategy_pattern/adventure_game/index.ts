import { Knife } from "./behaviors/weapon_behavior/weapons/knife";
import { King } from "./characters/king"

export const gameStrategyPattern = () => {
  const king = new King();
  king.fight();
  king.useWeapon();
  king.setWeapon(new Knife());
  king.useWeapon();
}

