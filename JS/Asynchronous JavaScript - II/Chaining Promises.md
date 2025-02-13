# Chaining Promises

- The promise methods `then()`, `catch()` and `finally()` are used to associate
further action to a *resolved* promise

```js
promise
.then(onFulfillment, onRejection)
.catch(onRejection)
.finally(onResolution)
```

- `then()` takes two callback functions as parameters:

  - `onFulfillment()` called if the promise is *fulfilled*

  - `onRejection()` (optional) if the promise is *rejected*

- `catch()` takes one callback function as parameter which is called when the
promise is *rejected*

- `finally()` takes a callback function as parameter which is called when the
promise is *resolved*

- All of them return a `Promise` object allowing you to chain them together
