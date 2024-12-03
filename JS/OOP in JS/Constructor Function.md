# Constructor Function

```js
function Movie(title, year)
{
    this.title = title,
    this.year = year,
    this.print = () => console.log(this.title, this.year)
}
const avengers = new Movie('The Avengers', 2012)
avengers.print()
```

- Constructor functions in JS works similar to constructors in other OOP languages

- However, the syntax above, introduced in ES6 removes the need for declaring a
class

- The `new` keyword creates an object and binds it to the variable on the LHS

- The `this` keyword in the constructor function refers to the object created
with `new`
