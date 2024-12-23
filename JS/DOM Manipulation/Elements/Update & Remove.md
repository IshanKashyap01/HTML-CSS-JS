# Updating Elements

```js
btn.textContent = 'Click here'
console.log(form.innerHTML)
```

- `textContent` property gets/sets the text content of an element, excluding any
HTML tags or markup

- `innerHTML` property gets/sets the HTML content within an element

  - It returns the inner HTML elements in the form of a string

## Removing Elements

```js
document.querySelector('h4').remove()
form.removeChild(btn)
```

- `remove()` deletes the element from the DOM

- `removeChild()` deletes the given child (if present) of the element from the
DOM
