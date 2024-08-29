# Tables in HTML

```HTML
<table border='1'>
    <tr>
        <th>ID</th>
        <th>Name</th>
    </tr>
    <tr>
        <td>Ishan</td>
        <td>Kashyap</td>
    </tr>
</table>
```

- `<table>` attribute is used to create tables in HTML

- `<tr>` stands for *table row* and adds a row to the table

- `<th>` stands for *table header* and creates a header cell for the table with
text in *bold*

- `<td>` stands for *table data* and adds a cell to the table

- `border` attribute adds a border to the table but is **deprecated** as it's
now handled by CSS

## Combining Cells

```HTML
<td colspan='2'>English</td>
<td rowspan='5'>Break</td>
```

- `colspan` spans the cell to the next columns

- `rowspan` spans the cell to the next rows

## Sections of a Table

- A table can have the following three sections: `<thead>`, `<tbody>` and `<tfoot>`

- Although, this bifurcation only provides extra information to the browser and
makes no visual difference

- `<thead>` rows that are to be considered the table header

- `<tbody>` normal rows of the table

- `<tfoot>` footer rows of the table

  - For ex. the *Grand total* row of a bill or an expense table
