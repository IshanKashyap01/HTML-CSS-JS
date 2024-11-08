# Operators in JS

## Arithmetic

```js
/* Unary operators: ++ -- + -
 * Binary operators: = + - * / % **
 * Assignment operators: = += -= *= /= %= **=
 */
```

- JS contains all the usual arithmetic operators like plus, minus, equals, etc.

- But in addition, it also has `**` as the *exponentiation* operator

  - It is an alternative to `math.pow()` but also works for BigInts

- It also has the corresponding augmented assignment operator (`**=`)

## Comparison

```js
// == != < <= > >= === !==
```

- The equality and inequality operators of JS converts and compare operands of
different types

  - Therefore, `'5' == 5` will be returned `true`

- To overcome this, the *strict equality* (`===`) and the *strict inequality*
(`!==`) operators were introduced, which don't convert types

## Logical

```js
// Logical operators: && || !
```

- Logical operators of JS, unlike most languages, works on more than just boolean
values

- $0$, `undefined`, `null`, `NaN` (not a number) and `""` are all considered
`false`

- Whereas, every other number and string is considered `true`

- However, the return value for expressions with non-boolean values will not be
boolean

- For non-boolean AND expression, the first `false` or the last `true` value
will be returned and vice-versa for OR

- For ex: `1 && 3 && 4` returns $4$ whereas `false || 3 || null` returns null
