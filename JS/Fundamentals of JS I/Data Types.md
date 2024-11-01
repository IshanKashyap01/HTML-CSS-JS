# Data Types

- JS allows *strings, numbers, boolean, null, undefined, symbols (since ES6) and*
*BitInt* data types

- Although, internally, every primitive exists within a wrapper object

- The wrapper classes contain useful utilities and functions for their respective
data types

- Every primitive type except `null` and `undefined` have wrapper classes

- Numbers have a fixed size of 64 bit, therefore, BigInt was introduced to store
larger numbers

- However, BigInt cannot be mixed with other types and will throw a type error

## Undefined

```js
let a;
console.log(typeof a); // result: undefined
console.log(a); // result: undefined
```

`undefined` is both the type and value of variables without a definition

## Null

```js
let a = null;
console.log(a); // result: null
console.log(typeof a); // result: object
```

- Variables with a `null` value are considered objects in JS

- It's an unfixed bug introduced at its beginning which was never fixed to conform
with legacy code

---

*Note*: `Infinity` is also a valid numerical value in JS
