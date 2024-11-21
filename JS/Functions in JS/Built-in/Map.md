# Map Function in JS

```js
const let mat = arr.map(function(element, index, arr))
const let squaredArray = arr.map(x => x * 2)
```

- `map()` is an iterative function that calls the passed function on each element
of the array

- The outputs from all the iterations are arranged and returned in a new array

- The callback function has the following parameters (in sequence):

    1. `element` current element being processed

    2. `index` (optional) index of the current element being processed

    3. `array` (optional) the array the `map()` function was called upon
