# Aligning Grid Items

## Aligning All Grid Items

- These properties are defined for the grid container

```CSS
justify-items | align-items: <V>;
place-items: <V> | (<justify-items> && <place-items>);
V -> start | center | end | baseline | stretch
```

- `justify-items` *horizontally* justifies all grid items within their cells

- `align-items` *vertically* justifies all grid items within their cells

- `place-items` shorthand for both, where either a different or a common value
can be specified

## Aligning Individual Grid Items

- These properties are defined for elements that act as grid items

- `justify-self`, `align-self` and `place-self` properties works just like their
`-items` counterpart except they're for individual grid items
