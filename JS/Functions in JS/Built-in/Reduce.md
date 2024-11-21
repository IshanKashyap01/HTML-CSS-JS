# Reduce Function in JS

```js
const sum = arr.reduce((sum, curr) => sum + curr, 0)
```

- `reduce()` calls a user-supplied callback function on each element of the array

- Each call gets the return value of the previous one, and the return value from
the final call is returned

- Unlike `map()`, which returns an array, `reduce()` returns a single value

## Syntax

`reduce()` takes the following two parameters:

1. The callback function can have the following parameters (in sequence):

    1. `accumulator` return value of the previous call

        - For the first call, its default value of `arr[0]`

    2. `currentValue` value of the current element

    3. `currentIndex` (optional) index of the current element

    4. `array` (optional) array on which the `reduce()` function is called

2. `initialValue` (optional) value of the `accumulator` for the first call
