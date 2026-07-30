import { Dinner } from "./diner";
import { Lunch } from "./lunch";

export function iteratorPattern() {

  const dinner = new Dinner();
  const lunch = new Lunch();

  const dinnerItems = dinner.getMenuItems();
  const lunchItems = lunch.getMenuItems();

  const menuItems = [...dinnerItems, ...lunchItems];

  const printMenuItem = (item: string) => console.log(item);

  menuItems.map(printMenuItem);

  const hash = { first: 'one', second: 'two' };

}
