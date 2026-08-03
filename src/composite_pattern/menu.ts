import { MenuComponent } from "./menu_component";

export class Menu extends MenuComponent {
  menuComponents: MenuComponent[] = [];
  name: string;
  description: string;

  constructor({ name, description }: { name: string, description: string }) {
    super();
    this.name = name;
    this.description = description;
  }

  public add(component: MenuComponent): void {
    this.menuComponents.push(component);
  }

  public remove(component: MenuComponent): void {
    const index = this.menuComponents.findIndex(item => item.getName() === component.getName());
    this.menuComponents.splice(index, index + 1);
  }

  public getChild(i: number): MenuComponent {
    return this.menuComponents[i];
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public print(): void {
    console.log(this.getName() + ", " + this.getDescription());
    console.log("---------------------");

    this.menuComponents.forEach(component => component.print());
  }

}
