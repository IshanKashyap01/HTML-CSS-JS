# Object and Array Destructuring

- It is a feature of JS that allows us to extract properties/elements of an object
or array into variables

- There are two types of destructuring patterns: *binding* and *assignment*
pattern

- Destructuring assigns the value of the variable, not a reference

```js
const obj = {a: 1, b: 2}
const arr = [3, 4, 5, 6, 7, 8, 9, 10]
// a = obj.a, b1 = obj.b
const {a, b: b1} = obj
// x = arr[0], y = arr[1], z = arr[3], arr2 = [7, 8, 9, 10]
const [x, y, , z, ...arr2] = arr
```

- Binding pattern allows unpacking properties/elements into variables in the
declaration itself

```js
let a1, a2, b
// b = obj.b
({b: b} = obj)
```

- Assigning pattern allows unpacking properties into existing variables
