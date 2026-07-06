# Definition

Objects of a super class should be replaceable with objects of the subclasses without altering the correctness of the program.

> This is where most programmers fail to implement. This enforces behavioral inheritance not just structural inheritance. An example for this is that A **Square** never should inherit from **Rectangle**. Because if we set width and height differently, we get different area and we can't replace subclass with base class.


### Suggestion

We should check if a subclass can replace the base class in any area. If in even one area we failed to replace that and we use something like (child instance of something) we failed polymorphism along side with liskow substitution principle. We can use composition instead.
