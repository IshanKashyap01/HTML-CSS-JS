# Event Propagation

- It refers to the process by which events are handled and propagated through
the DOM tree

- Event propagation occurs in two phases:

    1. **Capturing Phase**: event starts at the root of the DOM tree and
    traverses to the *target* element

    2. **Bubbling Phase**: after reaching the target element, the event
    propagates back to the root

- By default, event listeners are invoked in the *bubbling* phase

```enbf
element.addEventListener(type, listener, useCapture)
```

- `useCapture` (optional) is a boolean value which defaults to `false`

- However, if true, event listeners will be invoked in the *capturing* phase
instead

- `stopPropagation()` can be invoked on an `Event` to stop the event from
propagating further
