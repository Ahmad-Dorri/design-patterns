// this is lazy instantiation. If we don't need this class we don't create it.
// in multi threaded languages we may have race condition using singleton pattern. we should check for it and fix it. In languages like JS and dart that are single threaded langs, we don't have this issue. We may get error if we do some async work but we can remove that error by using module pattern singleton. worker and isolates are running on different threads but they have isolated memory and don't share memory with main thread.
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
