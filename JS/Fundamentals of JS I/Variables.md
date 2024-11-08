# Variables in JavaScript

## Syntax

```js
let num = 10, str
str = 'words'
console.log(num + str);
```

### Naming

- Variable naming rules in JS are a superset of those in languages like Java, C,
C++, etc.

- In addition, it just allows variable names to start with `$` and `_` signs and
the `$` sign can be used anywhere

### Declaration

- Variables can be declared directly or with either `var`, `const` or `let`

- Declaring a variable *without* a declaration keyword creates a *global variable*

- However, this will throw an error in `strict mode`

- `var`, depending on position declares variables in either a *function* or
*global scope*

- Moreover, `var` variables can be *redeclared* and used *before* they're defined

- `const` and `let` declares variables in a *block-level scope*

- `const` variables cannot be reassigned and cannot be declared *without*
initialization

- `let` and `const` variables cannot be redeclared or used before they're defined

## Convention

- Although, there is no limit to the length of variable names, they should not
be longer than 10 to 15 characters

- Variables should be given meaningful names using *camel for regular* and
*uppercase for constant* variables

- `var` is *discouraged* in favour of `let` and `const` *unless* dealing with
*legacy code*

- Variables should not be declared without a declaration keyword

---

*Note*: Variables can be reassigned values of entirely different types
