# Arrow Function

- Arrow functions are used in function expressions to make the code shorter and
more readable

- They are best suited for small and concise functions with minimum lines of code

- Arrow functions cannot be used with
[Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

```js
const printName = a => console.log(a)
const product = (a, b) => a * b
const division = () => {
    printName('hello',)
    return product(1, 1)
};
```

- We can skip the curly braces for single lines and the `return` keyword if the
statement returns a value

- Small brackets only needs to be included when zero or more than one arguments
are needed

- Just like function expressions with direct definition, the arrow functions
above are also not hoisted

- However, arrow functions cannot have a name
