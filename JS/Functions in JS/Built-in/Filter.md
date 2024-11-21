# Filter Function in JS

```js
const letters = arr.filter(str => str.length == 1)
```

- `filter()` calls a user-defined function on each element of the array

- It returns an array containing all the elements for which the callback function
returned `true`

- The callback function can have the following (in sequence):

    1. `element` current element of the array

    2. `index` (optional) index of the current element

    3. `array` (optional) array on which the `filter()` function was called
