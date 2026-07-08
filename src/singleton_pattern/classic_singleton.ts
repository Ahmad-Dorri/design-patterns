// this is lazy instantiation. If we don't need this class we don't create it.
export class Singleton {
  static instance?: Singleton;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}
