export abstract class CaffeieneBeverageWithHook {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  private boilWater() {
    console.log('Boiling water');
  }

  private pourInCup() {
    console.log('Pouring in cup');
  }

  abstract brew(): void;
  abstract addCondiments(): void;

  // hook
  protected customerWantsCondiments() {
    return true;
  }
}
