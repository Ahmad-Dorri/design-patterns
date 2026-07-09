interface Pizza {
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
}

class CheesePizza implements Pizza { }

class PizzaStore {
  private factory: PizzaFactory;
  constructor(factory: PizzaFactory) {
    this.factory = factory;
  }

  orderPizza(type: string) {
    const pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}

interface PizzaFactory {
  createPizza(type: string): Pizza;
}
