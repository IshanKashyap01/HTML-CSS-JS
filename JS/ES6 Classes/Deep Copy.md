# Deep Copy in JS

- A deep copy is a *structural equivalent* of the original but does not share
any references with it

- There is only one way to create a deep copy in JS:

```js
const obj5 = JSON.parse(JSON.stringify(obj1))
```

- We convert the original into a JSON string and then parse it into the new
variable

- However, methods and expressions won't be copied as they're not valid JSON
syntax and won't be stringified
