# Closure

```js
function outer()
{
    let value = 10;
    return function(){console.log(value)}
}
let inner = outer()
inner()
// 10 will be printed on the console
```

- When the last line of the above code is run, `outer()` has already popped
out of the call stack

- However, it returns a function that uses a value declared within `outer()`
itself

- Yet, when this inner function is called, it prints the value that shouldn't
exist

- The *lexical environment* up to the *global scope* is retained by the inner
function within what's called a **closure**

- Closures are stored in the heap along with objects, functions, and arrays

- Modern JS engines optimizes closures by only retaining variables actually
used

- *Closures* are created whenever a function/method uses values popped out of
the stack
