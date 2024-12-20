# Inheritance in Classes

- When a subclass is created, its superclass' constructor is called first

- Private methods and variables are not inherited by the child classes

- We can override an inherited method by defining it again in the child class

```js
class Car extends Vehicle
{
    #engine
    #isNA
    constructor(brand, model, color, engine, isNa)
    {
        super(brand, model, color)
        this.#engine = engine
        this.#isNA = isNa
    }
    getDetails()
    {
        return this.#isNA ? 'Naturally Aspirated ' + super.getDetails() : super.getDetails() 
    }
}
```

- `super()` calls the superclass' constructor and is used to provide arguments
to it

- If a method is overridden, the superclass' version of the method can be accessed
using the `super` keyword
