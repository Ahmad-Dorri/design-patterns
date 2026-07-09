class MyClass {
  helloCount = 0;
  // methods

  sayHello() {
    this.helloCount++;
    console.log('hello there');
  }

  printHelloCount() {
    console.log(this.helloCount);

  }
}

export default new MyClass();
