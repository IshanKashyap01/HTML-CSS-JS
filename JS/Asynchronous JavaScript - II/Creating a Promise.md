# Creating a Promise

```js
const promise = new Promise(executor)

function executor(resolve, reject)
{
    // doSomeWork() is an async function that may or may not finish successfully
    const success = doSomeWork()
    if(success)
    {
        resolve(value)
    }
    else
    {
        reject(reason)
    }
}
```

- A `Promise` must be given an *executor function* which is called as soon as
the promise is created

- This function performs asynchronous operations and decides the fate of the
promise

- The *executor* is passed two functions automatically

- The first function should be called to *resolve* the promise with a value

- The second function should be called to *reject* the promise with a reason
