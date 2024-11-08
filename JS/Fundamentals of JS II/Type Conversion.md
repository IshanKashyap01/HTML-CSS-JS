# Type Conversion or Type Casting

- It is the explicit conversion of values from one type to another

- Values can be converted or casted into a string, a number or a boolean

```js
// to string
let a = String(b) + c.toString();
// to number
let a = Number(b) + parseFloat(c) * +d / parseInt(e);
// to boolean
let a = Boolean(b) && Boolean(c);
```

- Unlike the `String()` method, `toString()` cannot convert `null` or `undefined`
and will throw an error

- `false` will be converted to $0$, `true` to $1$ and other non-numerical values
will be converted to `NaN`

- `"123.04f"` will be converted to:

    1. `NaN` by `Number()`

    2. `123` by `parseInt()`

    3. `123.04` by `parseFloat()`
