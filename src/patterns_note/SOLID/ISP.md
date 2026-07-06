# Definition

No client (Consuming class) should be forced to depend on methods it does not use. Fat, monolithic interfaces are bad.

> This rule enforces us to create single responsible interfaces that a class should implement. Like instead of creating **Worker** interface that has work(), eat() and sleep() methods, we create **IWorkable**, **IEatable** and **ISleepable**. With this we can create **Human** class that implements all of them and **Robot** class that implements only workable interface.

### Suggestion

This is exactly the SRP only for interfaces. Create single responsible interfaces make code better.
