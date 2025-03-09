# Accessing HTML Elements using jQuery

```js
$('.selector')
```

- To access a DOM element, provide the CSS selector for the element(s) as above

- It is a functional equivalent to the following:

```js
function $(selector)
{
    return document.querySelector(selector)
}
```

- Except it returns jQuery object(s) instead of HTMLElement(s)
