# Definition

Classes should be open for extension, but closed for modification.

> This means when we add a new feature, we should not have to change existing, tested, working code. This can achieve exclusively by using abstraction. Using interface and abstract classes for creating classes. Code to abstraction instead of concrete classes.

### Suggestion

You should close a class when we know what it does. If we don't know what it does and we lock the class, we lock to bad design. So first we should find the business logic then go for this pattern.
