# Promise in JS

- A `Promise` object represents the *eventual completion or failure* of an
asynchronous operation and its resulting value

- That is, it's a proxy for a value *not necessarily known* when the promise is
created

- The `Promise` object's state changes when the async operation completes

- We can add callback functions that get triggered on this change

- This lets *asynchronous methods return values like synchronous methods*

## States of a Promise

- A `Promise` object is in one of the following states:

    1. *pending*: (initial state) operation is yet to conclude

    2. *fulfilled*: operation finished successfully

    3. *rejected*: operation failed

- A promise is said to be *resolved* if it is *fulfilled or rejected*

- The eventual state of a promise can either be *fulfilled with a value* or
*rejected with a reason* (error)
