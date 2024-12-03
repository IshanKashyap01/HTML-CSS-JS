# Properties in JS

Every property in JS can be classified by three factors:

1. Enumerable or non-enumerable

2. String or symbol

3. Own property or inherited through the prototype chain

## Enumerability

- A property is enumerable if its internal enumerable flag is set to `true`

- Properties created via simple assignments or a property initializer are
*enumerable by default*

- Properties defined via `Object.defineProperty()` however, are *non-enumerable*
*by default*

- Most iteration means such as the `for in` loop or `Object.keys` *only visit*
*enumerable keys*
