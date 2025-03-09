# Async and Await

- `async function` declaration allows you to create an asynchronous function

- Whereas, `await` operator is used to *wait for a `Promise` to be fulfilled*

- Together, they allow an alternate syntax to promise chaining using `then()`

- An `async` function implicitly returns a `Promise` which fulfills to your
return value

```js
function getFetchResults(url)
{
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
        .finally(() => console.log('Fetch complete'))
}
```

- The above can be rewritten using `async` and `await` as follows:

```js
async function getFetchResults(url)
{
    try
    {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch(error)
    {
        console.error(error)
    }
    finally
    {
        console.log('fetch complete')
    }
}
```
