# Callback Functions

```js
function myFunction(func)
{
    return func(a, b);
}

myFunction(add(1, 2))

function add(a, b)
{
    console.log(a + b)
}
```

- A function passed as an argument to another function is called a *callback*
*function*

- It is typically invoked later at some point during the calling function's
execution

- This enables custom behavior to be executed after an event or a task is
completed

## Functions Returning a Function

```js
function func()
{
    return f(v)
    {
        console.log(v)
    }
}
// prints 'hi' on the console
func()('hi')
```

In addition to accepting functions as arguments (callbacks) we can also return
them
