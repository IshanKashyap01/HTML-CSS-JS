# Adding Elements

```js
const btn = document.createElement('button')
const form = document.querySelector('form')
form.appendChild(btn)
```

- `createElement()` inputs the tag name and returns a new corresponding HTML
element

- `appendChild()` appends the given element to the element's children

- `append()` is a more versatile method that allows multiple elements and/or
text to other elements

  - It accepts a variable number of arguments

- `insertBefore()` inserts the given element before the calling element

```js
element.insertAdjacentHTML(position, text)
```

- `insertAdjacentHTML()` parses the specified text and inserts it to the given
position, which could be:

  - `beforebegin` before the element

  - `afterbegin` just after the element, before its first child

  - `beforeend` just inside the element, after the last child

  - `afterend` after the element

- `beforebegin` and `afterend` are only valid if the element is in the DOM tree
and has a parent element

- If you append/insert an existing element, it'll be moved to the new location
