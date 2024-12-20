# Create and Assign Methods of Object

## Create

```js
const obj = {
    print: name => console.log(name)
}
const car = Object.create(obj)
// prints true
console.log(car.__proto === obj)
```

- `create()` takes an object as a parameter and using it as a prototype, creates
a new object and returns it

- In the above code, `car` will also have the `print()` method in its prototype

- However, it does not create a deep copy of the properties

## Assign

```js
const target = {a: 1, b: 2}
const source = {c: 3, d: 4}
const summation = Object.assign(target, source)
```

- `assign()` copies all the [enumerable and own properties](Properties.md) from
one or more source to a target object

- It returns the modified target object
