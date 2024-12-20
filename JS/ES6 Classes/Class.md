# Classes in JS

- Classes are a new way of creating Objects in JS introduced in ES6

- However, they're just a syntactical sugar over constructor functions with a
few differences

- Classes are hoisted but cannot be used in the *TDZ* just like variables declared
with `let` and `const`

- We can create classes through either *declaration* or as an *expression*:

```js
// Class declaration
class Vehicle
{
    // Properties (can be omitted)
    brand
    model
    color
    // Constructor
    constructor(brand, model, color)
    {
        this.brand = brand
        this.model = model
        this.color = color
    }
    // Methods
    getDetails()
    {
        return `${this.brand} ${this.model} in ${this.color}`
    }
}
// Class expression
const Car = class{
    print()
    {
        console.log(this.brand, this.model, 'with a', this.engine, 'engine', 'in', this.color)
    }
}
```

- By default, members (methods and instance variables) of a class are public

- In order to make them private, we prefix them with a `#`

- Directly accessing private members outside the class results in a `SyntaxError`
in *strict mode*
