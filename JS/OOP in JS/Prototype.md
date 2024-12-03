# Prototype

- *Prototype* is a reference to another object that serves as a blueprint for
properties and methods

- Every object directly or indirectly inherits from the `Object` class of JS

- Arrays are also objects as they have a prototype which allows us to use functions
like `map()`, `reduce()` etc.

- Whereas, the prototype for the `Object` class is `null`

## Accessing Prototype

```js
console.log(game1.__proto__)
console.log(Object.getPrototypeOf(game1))
console.log(Game.prototype)
```

- `__proto__` is a property of *objects* that links them to their prototype

- `prototype` is a property of *constructor functions* that defines the prototype
of objects created from it

## Prototypal Inheritance

- *Prototypal inheritance* allows objects to inherit methods and properties from
other objects using their prototype

```js
Game.prototype.printTitle = () => console.log(this.title)
```

- Using the `prototype` property, we can add new methods or properties to an
existing constructor

- Moreover, these properties will not be copied into the prototype of the objects
created from this constructor

- Instead, they will be available through inheritance

- This decreases memory usage by shortening the prototypes of objects

## Prototype Chaining

- Instead of classes, JS relies on *prototype chain* for inheritance

- Suppose a class `A` inherits from class `B`; `A`'s prototype refers `B` while
`B`'s prototype refers to `Object`

- Therefore, `A` inherits from `B` as well as the `Object` class

- If a property is not found in `A`, it will be searched for in `B`, and then
`Object`

- This mechanism of lookups is known as *prototype chaining*
