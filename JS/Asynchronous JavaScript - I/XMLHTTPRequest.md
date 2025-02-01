# XMLHTTPRequest API

- `XMLHTTPRequest` objects are used to interact with the server

- It allows retrieving data from a URL without reloading or refreshing the page

- Despite its name, it can be used to retrieve any type of data, not just `XML`

## Example Usage

```js
const request = new XMLHttpRequest()
// open(method, url, async, user, password)
request.open('GET', 'https://dummyjson.com/users/1')
request.responseType = 'text'
request.send()
request.addEventListener('load', () => console.log(request.responseText))
```

- `load` event is fired when an `XMLHTTPRequest` transaction completes
successfully

- `responseText` is a *read-only* property that contains the response from the
server

## Response Type Property

`responseType` is an *enum string value* specifying the type of data sent in
the response

- `'text'` or `''` represents a *string*, which is the *default* value

- `'arraybuffer'` is a JS `ArrayBuffer` containing binary data

- `'blob'` is a `Blob` object containing binary data

- `'document'` is an `HTML` or `XML` document

- `'json'` specifies the `response` is a JS object created by parsing the
content as *JSON*

### Open Method

`open()` initializes a new or re-initializes an existing HTTP request

- `method` represents the HTTP request method to use such as `GET`, `POST`,
etc.

- `url` a string or an object that provides the *URL* to send the request to

- `async` (optional) a boolean specifying whether or not to perform the
operation *asynchronously*;`true` by default

- `user` and `password` (optional) for authentication; `null` by default

### Send Method

`send()` sends the request to the server

- If the request is *asynchronous*, it returns as soon as the request is sent

  - Results are delivered using *events*

- Else, it doesn't return until the response arrives

- It accepts an *optional* `body` parameter that specifies the *request's body*
