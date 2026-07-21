import { CaffeieneBeverageWithHook } from "./caffeine_beverage_with_hook";

export class CoffeeWithHook extends CaffeieneBeverageWithHook {
  brew(): void {
    console.log('Driping coffee through filter');
  }

  addCondiments(): void {
    console.log('Adding sugar and milk');
  }

  protected customerWantsCondiments(): boolean {
    const answer = this.getUserAnswer();
    if (answer) {
      return true;
    } else {
      return false;
    }
  }

  private getUserAnswer(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.confirm("Would you like milk and sugar with your coffee ?");
  }
}
