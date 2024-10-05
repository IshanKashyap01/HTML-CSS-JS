# Grid Areas

```CSS
.grid-item
{
    grid-area: "item-1";
}
...
/* A grid with 2 columns and 3 rows */
.grid-container 
{
    grid-template-areas: "item-1 item-1" "item-2 item-3" "item-4 item-4"
}
```

- A grid area is a rectangular area on a grid made with one or more grid cells

- `grid-area` is a shorthand for `grid-row` and `grid-column` but can also be
specified a name instead

- `grid-template-areas` specifies a list of named *grid areas* to define rows
and columns
