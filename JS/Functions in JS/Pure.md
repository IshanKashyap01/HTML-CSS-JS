# Pure Functions

A function is called a pure function *iff* it fulfills the following conditions:

1. It does not access or modify any external factors outside its scope

    - That is, it doesn't read / write to external variables, files, DBs, etc.

    - Therefore, you cannot use anything like `console`, `prompt`, `alert`, etc.

2. It always returns the same output for the same input

Therefore, they have *no side effects* and are *deterministic*
