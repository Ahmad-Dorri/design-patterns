# Definition

Bundling data (variables/attributes) and the methods (functions) that operates on that data into a single unit (class), while restricting direct access to that data from the outside.

> For example using public, private and protected prefix for the methods in languages that support this feature. Or using a getter for access to a variable and not expose that variable directly, like using getBalance method and hide the balance itself from the outside world.

### Suggestion

Always make your variable and methods private and only expose things that are absolutely necessary.
