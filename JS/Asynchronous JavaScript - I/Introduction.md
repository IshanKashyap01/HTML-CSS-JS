# Introduction to Asynchronicity in JS

- JS is a *synchronous* and *single-threaded* language

- *Synchronous* means tasks must execute in sequence and each task must finish
before the next can begin

- *Single-threaded* means JS relies on only one thread to handle its execution

- However, there are *web APIs* that work *asynchronously*

- For ex. functions such as `setTimeout()`, `setInterval()`, and `fetch()` of
the `window` global object

```js
// fn(function, delay, ...parameters)
setTimeout(console.log, 2000, `wait time is over`)
setInterval(console.log, 1000, i++)
```

- `setTimeout()` sets a timer which executes a function once the timer expires

- `setInterval()` repeatedly calls the given function until the time-out is
cancelled

- Time delay and function parameters are *optional*

- If no delay is specified, the function is executed *immediately* (and
repeatedly in case of `setInterval()`)

- They return a *positive integer* known as `timeoutID` which uniquely
identifies the timer

- `clearTimeout()` can be passed the `timeoutID` to cancel the time-out
