# Template Columns & Rows

```CSS
grid-template-columns | grid-template-rows: <length> <length>... | repeat(<columns> | auto-fit, <length>);
/* For three columns */
grid-template-columns: 100px 100px 100px | 1fr 1fr 1fr | repeat(3, <length>);
```

- `grid-template-columns` specifies the size and number of columns for the grid

- `grid-template-rows` specifies the size and number of rows for the grid

- `fr` stands for *fraction* and is used to specify a ratio b/w the columns

- Specifying an absolute value will make the grid unresponsive

- `auto-fit` will fit as many columns as it can based on the available width
