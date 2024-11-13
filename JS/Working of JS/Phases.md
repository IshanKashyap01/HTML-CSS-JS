# Phases of Execution Context

## Creation Phase

- All variables and functions are assigned a memory space in the *variable*
*environment*

- However, variables declared without a declaration keyword are skipped

- Functions will be stored wholly while variables will be `undefined`

## Execution Phase

- Once the creation phase is finished, the execution phase begins

- Each program has one and only one **global execution context (GEC)**

- While functions have their own **function execution context (FEC)**

- Once the function is executed within its *FEC*, control returns to the *GEC*

### FEC

- When a function is called, a *function execution context* is created for it

- It differs from *GEC* in that *function parameters* are assigned values in the
*creation phase* itself

- *Function parameters* are assigned `undefined` if and only if:

    1. No argument is passed and,

    2. There is no default value in the function definition

## Cleanup Phase

Garbage collection is performed to free up memory used by unreferenced objects
and variables
