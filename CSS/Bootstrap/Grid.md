# Grid System

- A grid can only be created within an element belonging to the `container` class

- Each row within the grid is a flexbox with

- There are 12 hard-coded columns in Bootstrap's grid layout

- If more than 12 column spaces are occupied, then the extra columns will move
onto the next row

- Moreover, a row cannot have another row and a column cannot have another column
within

- However, they row can contain multiple columns and vice-versa

## Syntax

```HTML
<div class="container">
    <div class="row row-cols-2">
        <div class="col"></div>
    </div>
</div>
```

- `col-1` through `col-12` can be used to make a column occupy more space

- If all columns have class `col`, then the space will be divided equally

- If the above two forms are mixed, then the remaining space will be evenly divided
into the `col` elements

- `col-auto` class makes the column adjust its width based on its content

- `row-cols-2` specifies that there can only be two columns per column
