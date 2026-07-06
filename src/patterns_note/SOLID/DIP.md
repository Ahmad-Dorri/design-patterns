# Definition
High level modules (Business logic), should not depend low level modules (API, utilities, database). Both should depend on abstractions (interfaces). Furthermore abstractions should not depend on details, details should depend on abstractions.

> For example we should not directly instantiate database in a service. We should inject an interface like **IDatabase** to service via constructor. The database implements the interface. Now the high level module is in order to plug the correct database into it. In future we can change the database without changing every service by implementing the interface again on the new database.

### Suggestion

If we have a class that depends on other classes, we should think in the future, if we wanted  to change the low level module, should we change the high level or not. If so we are not doing this correctly and we should code to abstractions instead of concrete classes. We should use factory pattern or dependency injection along side with this pattern to make use of it.
