# Hoisting and Temporal Dead Zone

## Hoisting

- Variables declared with a declaration keyword and functions are added to the
*variable environment* in the *creation phase*

- This process is known as **hoisting**

## Temporal Dead Zone

- It is the period b/w the *start* of the *execution phase* and the point
where the *variable is declared*

- During this time, all variables with declaration keywords exists in the memory

- However, they do not have a value assigned yet, and hence, are `undefined`

### `var` vs `let` and `const`

- Before `ES6`, only `var` existed, which can be accessed during the *TDZ*

- This created unwanted side-effects leading to the introduction of `let` and
`const` in `ES6`

- Both of them throws a `ReferenceError` if used during the *TDZ*
