# `this` Keyword in JS

- `this` keyword refers to the context where a piece of code, like a function
body, is supposed to run

- Its value in JS depends on how the function is invoked (runtime binding), not
how it's defined

- If a regular function is invoked on an object, `this` refers to that object

- If it is invoked as a standalone function, it refers to the global scope (or
`undefined` in strict mode)

- Arrow functions however, inherit it from the parent scope when they're defined

- Therefore, a standalone arrow function will refer to the global scope even in
strict mode
