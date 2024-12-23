# Event Listeners

```js
const button = document.querySelector('#removeH2')
const h2 = document.querySelector('h2')
button.addEventListener('click', () => h2.remove())
```

- `addEventListener()` sets up a function that will be called whenever the given
event occurs on the element

- More than one listeners can be added to the same event over any given element

## Events and their Trigger Condition

- `click`: after a click or a click equivalent action occurs on the element

- `mouseover`: a pointing device hovers over the element or one of its children

- `mouseDown`: a button on a pointing device is pressed down over the element

- `mouseUp`: a button press is released over the element

- `keydown`: a key is pressed; it is fired for all keys

```js
document.body.addEventListener('keydown', event => console.log(event.type, event.key))
```

- `event` is the event that takes place on the event target

- `type` is a read-only property of the `Event` interface and returns a string
containing the event's type

- `key` is a read-only property of the `KeyboardEvent` interface that returns
the value of the key pressed
