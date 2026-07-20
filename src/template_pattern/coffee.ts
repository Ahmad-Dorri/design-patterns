export class Coffee {
  public prepare() {
    this.boilWater();
    this.brewCoffeeGrinds();
    this.pourInCup();
    this.addSugarAndMilk();
  }

  private boilWater() {
    console.log('Boiling water');

  }

  private brewCoffeeGrinds() {
    console.log('Driping coffee through filter');

  }

  private pourInCup() {
    console.log('Pouring into cup');

  }

  addSugarAndMilk() {
    console.log('Adding sugar and milk');

  }
}
