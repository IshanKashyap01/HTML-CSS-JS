# Strings

```js
let intro = `my name is ${name} and I'm ${age} years old`
const htmlHead = `
<head>
<title>Document</title>
</head>
`;
```

- Backticks allows multi-line strings and string interpolation

- Strings have index numbers for each character starting from 0

## Useful Functions & Properties for Strings

- `charAt()` returns the character of the string present at the given index

  - If the index is out of bounds, an empty string will be returned

- `concat()` joins the given string at the end and returns the result

- `length` property represents the number of characters in the string

- `indexOf()` returns the index of the first occurrence of the given character
or string

  - `indexOf('s', 8)` will return the first occurrence of `s` after the index 8

- `lastIndexOf()` same as above but returns the last occurrence instead

- `toLowerCase()` returns the string with all characters in lowercase

- `toUpperCase()` returns the string with all characters in uppercase
