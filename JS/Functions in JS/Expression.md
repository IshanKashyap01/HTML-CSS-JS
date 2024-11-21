# Function Expression

- A function expression is a function that is being assigned to a variable

- We can create the function in the initialization itself or assign an existing
one

## Direct Definition

```js
const sum = function (a, b){
    return a + b;
};
```

- Functions directly created in the definition cannot be used anywhere outside
the function itself

- Therefore, unless when using *recursion*, we do not provide them with a name

  - Such nameless functions are called *anonymous functions*

- Due to hoisting, the value of the variables remains `undefined` in the creation
phase

- Therefore, regardless of the declaration keyword used, function expressions
cannot be used before their definition

  - `const` and `let` will return a `ReferenceError`, `var` will return a
  `TypeError`

*Note*: It is better to add a semicolon in this case as ASI isn't foolproof

## Function Reference

```js
const print = printList
print('hello', 'world!')
function printList(...a)
{
    console.log(a)
}
```

The above code will run successfully as `printList()` is hoisted
