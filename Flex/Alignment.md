# Alignment

## Align Content

```CSS
align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch
```

- It is the cross axis equivalent of [`justify-content`](Justify%20Content.md)

- That is, it sets how the the browser distributes the elements within a flexbox
wrt the *cross axis*

## Align Items

```CSS
align-items: flex-start | flex-end | center | baseline | stretch
```

- Controls the alignment of items on the cross axis

- It is best used instead of `align-content` when there is only one row of content

### Values

- `flex-start` aligns the content to the start of the cross axis

- `flex-end` aligns the content to the end of the cross axis

- `baseline` aligns the contents such that the first line of their texts have
the same baseline

## Align Self

```CSS
align-self: flex-start | flex-end | center | baseline | stretch
```

Works the same as `align-items` but for individual elements
