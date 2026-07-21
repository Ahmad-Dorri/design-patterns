export abstract class CaffeineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater() {
    console.log('Boiling water');

  }

  private pourInCup() {
    console.log('Pouring in cup');

  }

  protected abstract brew(): void;

  protected abstract addCondiments(): void;
}
