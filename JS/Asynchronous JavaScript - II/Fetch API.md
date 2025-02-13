# Fetch API

- The Fetch API provides an interface for fetching resources (including across
a network)

- It is a powerful and flexible replacement for `XMLHTTPRequest`

- `fetch()` takes an argument as the path to the resource to fetch

- It returns a `Promise` that resolves to a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
to the request

## Response Object

```js
fetch('https://some/url').then(handleAPIresponse).catch((error) => alert(error))

function handleAPIResponse(response)
{
    if(!response.ok)
    {
        throw new Error(response.status)
    }
    return response.json()
}
```

- `Response` object represents the response to a request

- `ok` boolean indicating whether the response was successful or not

- `status` status of the response (`200` for success)

- `json()` returns a promise that resolves with the result of parsing the
response body text as JSON
