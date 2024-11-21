# Currying Functions in JS

```js
function power(power)
{
    return function (base)
    {
        return base ** power
    }
}
const square = power(2), cube = power(3)
// prints 4 and 8
console.log(square(2), `and`, cube(2))
```

- It is a technique that converts a function with multiple arguments into a chain
of functions, each with a single argument

- That is, it allows us to convert a function from the form `fn(a, b, c)` to
`fn(a)(b)(c)`

- It helps in creating modular, reusable, readable and less error-prone code
