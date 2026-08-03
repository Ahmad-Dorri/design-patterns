import type { MenuComponent } from "./menu_component";

export class Waitres {
  allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu() {
    this.allMenus.print();
  }
}
