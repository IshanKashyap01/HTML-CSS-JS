# Forms Tag

- As we know, the client makes requests to the server, which sends responses in
return

- HTML Forms collect the data to be sent in the requests made to the server

```HTML
<form action="success.html" method="get" target="_blank">
```

- `action` specifies where to send the data when the form is submitted

- `method` specifies the HTTP method to be used in the requests sent to the server

- `target` specifies where the response received by the server will be displayed

## GET Method

- It is used to request data from the specified resource but not update it

- The values sent as part of the request are appended to the url

- Therefore, it should only be used when dealing with insensitive data and/or
a small quantity of data

- Moreover, `GET` requests are added to the browser history and can also be
bookmarked

- It can only transfer ASCII characters within the request

## POST Method

- It is used to make a secure request to the specified source/server

- It can create new or modify existing data on the server

- As it adds the data to the request payload instead of the URL, it can send a
large amount of data

- `POST` requests does not appear on browser history and cannot be bookmarked

- It can transfer any type of data as part of the request
