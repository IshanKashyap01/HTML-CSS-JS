# Methods for Strings

## Replace & Replace All

- `replace()` replaces the first occurrence of the first parameter with the second

- Whereas, `replaceAll` replaces all occurrences

- Both methods returns a new string as **strings in JS are immutable**

## Trim & Split

- `trim()` returns a copy of the calling string without leading or trailing spaces

- `split()` splits the string into an array at the occurrences of the given pattern

## Substring & Slice

```js
let string = 'abcdef'
// prints bcdef
console.log(string.substring(1))
// prints cde
console.log(string.substring(2, 5))
```

- `substring()` and `slice()` returns the substring of the calling string

- While `substring()` converts negative values to $0$, `slice()` will count
backwards from the last string
