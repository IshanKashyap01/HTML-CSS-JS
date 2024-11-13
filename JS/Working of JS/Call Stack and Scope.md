# Call Stack and Scope in JavaScript

## Call Stack

- In JS, the call stack is filled with *execution contexts*

- The bottom-most entry is the *GEC* and *FEC*s are stacked on top of it

## Scope

- *Global* and *block* scopes works the same way in JS as they do in other
languages

- However, JS has an extra type of scope known as the *function/local* scope

- *Function* scoped variables cannot be used outside the function they're declared
in

- While `var` is either *function* or *global* scoped, `let` and `const` are
*block* scoped

### Scope Chaining

- Suppose, an FEC requires access to a variable; it could either be present in
said FEC or not

- *Iff* the variable is not present in it, it looks for it in its parent contexts

- Every local execution context has a reference to its parent context, called
**lexical environment**

- It's a data structure that holds function and variable declarations

- Thereby providing scope for their access and resolution

- Therefore, it allows for scope chaining, making variables in the outer scope
available in inner ones
