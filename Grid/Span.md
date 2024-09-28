# Spanning Grid Items to Multiple Rows and Columns

```CSS
grid-column-start | grid-row-start: <grid-line> | span <cells>;
grid-column-end | grid-row-end: <grid-line> | span <cells>;
grid-column | grid-row: <start> / (<end> | span <cells>) | span <cells>;
```

- `grid-column-start` and `grid-column-end` specifies the *start* and *end*
position for a grid item *horizontally* with `grid-column` as their shorthand

- Whereas `grid-row-start` and `grid-row-end` does the same *vertically* with
`grid-row` as their shorthand

- Each grid line, for both columns and rows, has a number

- `span` specifies the item should cover the given number of cells
