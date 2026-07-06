# Definition

Creating a new class (child/derived) base on an existing class (parent/base). The child **reuses** (inherits) all non private attributes and methods of the parent and can add or override its own.

> We can achieve this by using **extend** keyword. It establishes IS-A relationship.

### Suggestions

Deep inheritance is not good at all. Before using inheritance we should think about other design tools like composition and if we can use them, we should not use inheritance. But for is-a relationship we can use inheritance and it makes code better, like circle is-a shape.
