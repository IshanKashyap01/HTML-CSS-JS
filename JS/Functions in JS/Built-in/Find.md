# Find and Find Index Function in JS

```js
const arr = [1, 2, 3, 4, 5]
// prints 3 on the console
console.log(arr.find(n => n > 2))
// prints 1 on the console
console.log(arr.findIndex(n => n == 2))
```

- Both functions takes a callback function on each element in the array in order

- The output of the callback function is treated as a boolean value

- The first element to return the truthy value is returned by `find()` while
`findIndex()` returns its index

- If there is no match, `find()` returns `undefined` while `findIndex()` returns
$-1$

- The callback function for both function takes the following parameters:

    1. `element` current element of the array

    2. `index` (optional) index of the current element of the array

    3. `array` (optional) the array on which the function was called upon

- To search the array in opposite direction, use `findLast()` and
`findLastIndex()`
