# Flex Grow, Shrink and Basis

## Flex Grow

- `flex-grow` controls by what factor the extra space in a flexbox should be divided
b/w its elements

- Suppose, there are two elements with `flex-grow` set to `2` and `1` respectively

- Any extra space will be assigned in the ratio $2:1$ b/w the first and second
element

- Elements without a `flex-grow` property will not grow in size

## Flex Shrink

- `flex-shrink` controls by what factor should the elements shrink in size if
they overflow the flexbox

- Suppose, there are two elements with `flex-shrink` set to `2` and `1` respectively

- Any overflowed space will be deducted from the first and second element in the
ratio $2:1$

- Elements without a `flex-shrink` property will not be shrunk

## Flex Basis

```CSS
flex-basis: <width> <height> | <length>
```

- `flex-basis` sets the initial size of a flex item

- It can override the `height` and `width` of an element if they're also specified
