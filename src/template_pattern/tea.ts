export class Tea {
  public prepare() {
    this.boilWater();
    this.putInWater();
    this.pourInCup();
    this.addLemon();
  }

  private boilWater() {
    console.log('Boiling water');
  }

  private putInWater() {
    console.log('Put tea bag into boiled water');
  }

  private pourInCup() {
    console.log('Pouring into cup');
  }

  private addLemon() {
    console.log('Adding lemon');

  }
}
