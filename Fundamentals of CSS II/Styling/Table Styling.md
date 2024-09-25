# Table Styling

## Table Border

```CSS
table
{
    border-collapse: collapse;
}
td, tr
{
    border: 1px blue solid
}
```

- As the `border` attribute of `table` element is deprecated, we need CSS to
add borders to tables

- However, adding a `border` property to `table`, will only create an outline

- Therefore, the `border` property needs to be given to `table`, `th` and `td`

- However, simply adding a `border` will create a separate border for each `td`
and `tr`

### Border Collapse

Setting `border-collapse` to `collapse` will collapse all borders into a single
one
