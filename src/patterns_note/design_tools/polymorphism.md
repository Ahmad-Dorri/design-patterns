# Definition

The ability of an object to take on many forms. Specially it allows you to treat objects of different child classes as if they were objects of the parent class, while their actual behavior remains unique.

> For example having a base class of **Animal** and some derived classes like **Dog**, **Cat**, etc. They all have **makeSound** method. If we have a function that takes an Animal class as input and call makeSound we can see different behaviors if it was a dog or it was a cat.

### Suggestion

If we overuse **instance of** or type checking before calling some methods of child classes we are fighting polymorphism and not using it.
