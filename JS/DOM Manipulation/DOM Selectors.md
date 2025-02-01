# DOM Selectors

- The selectors API provides methods to easily and quickly access *HTML elements*
using *CSS selectors*

  - Pseudo-classes are not supported to protect user privacy

```js
console.log(document.querySelector('h1'))
console.log(document.querySelectorAll('#about, .para'))
```

- `querySelector()` returns the first element that matches the given selector

- `querySelectorAll()` returns an array of all elements that match the given
selector

## Getting Elements by Selector Type

```js
const about = document.getElementById('about')
const para = document.getElementByClassName('para')
const h1 = document.getElementByTagName('h1')
h1.style.border = '1px solid black'
```

- Using the above methods, we can get an element by specifically using its *id,*
*class or name*

- Both `getElementByClassName()` and `getElementByTagName()` returns a live
`HTMLCollection` containing all matching elements

- `HTMLCollection` is a generic array-like object containing elements in the
order they appear in the document

- *Live array* here means that changes in the DOM will reflect in the array in
real-time
