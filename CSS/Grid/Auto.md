# Grid Auto Rows & Columns

```CSS
grid-auto-rows: <V>;
grid-auto-columns: <V>;
grid-auto-flow: <V> | (grid-auto-rows && grid-auto-columns);
V -> <length> | minmax(min, max);
```

- `grid-auto-rows` specifies the height of the rows in a grid

- `grid-auto-columns` specifies the width of the columns in a grid

- `grid-auto-flow` is a shorthand for both

- `minmax()` defines an inclusive range of a minimum and a maximum value

- For example, `minmax(20px, auto)` means the row height will not be lower than
`20px` and set automatically if more space is available
