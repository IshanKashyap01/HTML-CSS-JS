# Managing Styles and Attributes with DOM

## Styles

```js
const h1 = document.getElementByTagName('h1')
h1.style.border = '1px solid black'
h1.style.backgroundColor = '#ccc'
```

We can provide styles to any HTML element by accessing the `style` property as
above

## Attributes

```js
img.setAttribute('src', 'new-image.jpg')
audio.setAttribute('autoplay', '')
img.removeAttribute('title')
```

- `setAttribute()` takes the attribute name and value and sets it for the
element

- For boolean attributes, as the attribute being present means true, the value
should be an empty string

- If an attribute with the given name already exists, it'll update its value,
otherwise it'll create a new one

- `removeAttribute()` removes the given attribute from the element
