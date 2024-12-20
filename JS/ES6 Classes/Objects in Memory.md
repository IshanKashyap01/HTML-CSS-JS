# How Objects are Stored in Memory in JS

- In JS, like most languages, variables are stored in the stack and primitives
are stored directly

- However, objects are stored in the heap and variables hold their memory
location instead

- Therefore, simple assignments as below are pass by reference and cannot create
independent copies

```js
const obj1 = {
    key: "value",
    marks: {
        maths: 10,
        english: 20
    }
}
const obj2 = obj1
```

- In the above code, changes made to `obj2` will reflect in `obj1` as well

- Moreover, `obj1 === obj2` will return `true`
