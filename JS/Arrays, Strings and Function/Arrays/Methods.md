# Methods in Arrays

## Adding Elements

- `push()` adds the given element(s) at the end

- `unshift()` adds the given element(s) at the beginning

Both of the above methods returns the new length

## Removing Elements

- `pop()` removes and returns the last element

- `shift()` removes and returns the first element

## Finding Elements

- `indexOf()` returns the index of given element, if present, else $-1$

- `includes()` returns whether the given element is present or not

## Other Methods

### Slicing

```js
arr = [1, 2, 3, 4]
console.log(arr.slice(1))  // will [2, 3, 4]
console.log(arr.slice(-1)) // will return [4]
```

- `slice()` returns a [shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)
of a portion of an array

- However, it doesn't alter the original array

### Splicing

```js
arr = [1, 3, 5]
arr.splice(1, 0, 2) // arr will become [1, 2, 3, 5]
arr.splice(3, 1, 4) // arr will becomes [1, 2, 3, 4]
```

- `splice()` can add, update or delete elements from an array

- The first parameter tells the index where the operation is to be performed

- The second parameter tells how many elements are to be deleted starting from
the given position

- All parameters after the second will be added at the given position

### Concat

```js
ar1 = [1, 2,]; ar2 = [3, 4];
arr = ar1.concat(ar2); // arr will be assigned [1, 2, 3, 4]
```

`concat()` returns the concatenation of the two arrays but doesn't change either
