import { UnsupportedOperationException } from "./unsupported_operation_exception";

export abstract class MenuComponent {
  public add(component: MenuComponent): void {
    throw new UnsupportedOperationException();
  }

  public remove(component: MenuComponent): void {
    throw new UnsupportedOperationException();
  }

  public getChild(i: number): MenuComponent {
    throw new UnsupportedOperationException();
  }

  public getName(): string {
    throw new UnsupportedOperationException();
  }

  public getDescription(): string {
    throw new UnsupportedOperationException();
  }

  public getPrice(): number {
    throw new UnsupportedOperationException();
  }

  public isVegetarian(): boolean {
    throw new UnsupportedOperationException();
  }

  public print(): void {
    throw new UnsupportedOperationException();
  }
}
