# Object Literal

- An object literal is a set of zero or more key-value pairs in an object enclosed
in `{}`

- Object literals cannot be used at the beginning of a sentence

- This is because the `{` will be interpreted as the beginning of a new block

```js
let obj = {name: 'John', surname: 'Doe'}
console.log(obj.name)
console.log(obj['surname'])
```

- We can access properties of an object in the following two ways:

    1. *Dot notation*: we know the property name beforehand

    2. *Bracket notation*: property name is dynamic, contains special characters,
    starts with numbers, is a reserved keyword, or any valid JS expression

- We can add new properties to an existing object in the following ways:

```js
obj.age = 18
obj['class'] = 'XII'
obj = {...obj, section: 'C'}
```

- Functions can be added to object literals in the following two ways:

```js
obj = {
    ...obj,
    getName: () => obj.name + ' ' + obj.surname,
    printDetails()
    {
        console.log(`Name: ${this.getName()}`)
        console.log(`Class: ${this.class + ' ' + this.section}`)
        console.log(`Age: ${this.age}`)
    }
}
```
