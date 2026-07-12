import { Espresso } from "./beverages/espresso";
import { Milk } from "./condiments/milk";
import { Soy } from "./condiments/soy";

export function decoratorPattern() {
  let beverage = new Espresso();
  beverage = new Milk(beverage);
  beverage = new Soy(beverage);

  console.log(beverage.getDescription() + " " + beverage.cost());

}
