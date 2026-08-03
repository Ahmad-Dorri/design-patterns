import { Menu } from "./menu";
import { MenuItem } from "./menu_item";
import { Waitres } from "./waitres";

export function compositePattern() {
  const pancakeHouseMenu = new Menu({ name: "Pancake House Menu", description: "breakfast" });
  const dinerMenu = new Menu({ name: "Diner Menu", description: "lunch" });
  const cafeMenu = new Menu({ name: "Cafe Menu", description: "dinner" });
  const dessertMenu = new Menu({ name: "Dessert Menu", description: "deserts" });

  const allMenus = new Menu({ name: "All Menus", description: "All Menus combined" });
  allMenus.add(pancakeHouseMenu);
  allMenus.add(dinerMenu);
  allMenus.add(cafeMenu);

  dinerMenu.add(dessertMenu);

  dinerMenu.add(new MenuItem(
    {
      name: "Pasta",
      description: "Pasta with Mariana sauce",
      price: 3.89,
      vegetarian: true,
    }
  ));

  dessertMenu.add(new MenuItem({
    name: "Apple pie",
    description: "Apple pie with a flakey sauce",
    price: 1.59,
    vegetarian: true
  }
  ));

  const waitress = new Waitres(allMenus);

  waitress.printMenu();
}
