# Higher Order Functions

- Consider a function fulfills *at least one* of the following conditions:

    1. Accept a function as a parameter (callback function)

    2. Return a function

- Such functions are known as *higher order functions*

- They are best used when multiple functions are broadly the same with marginal
differences

- Suppose, you want to find the square, cube, square root, and cube root of each
number in an array

- Instead of writing a separate function for each operation, you can use a higher
order function as follows:

```js
function operateOnArray(operation, numbers)
{
    const answers = []
    for(let number of numbers)
    {
        answers.push(operation(number))
    }
    return answers;
}
const squareOfArray = operateOnArray(n => n * n, arr)
```
