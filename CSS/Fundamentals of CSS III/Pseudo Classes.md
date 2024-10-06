# Pseudo Classes

- A CSS pseudo class is a keyword added to a selector that specifies a *special*
*state of the selected element*

```CSS
a:hover
{
    ...
}
```

- A pseudo class consists of a colon (`:`) followed by a pseudo class name

- `only-child` elements that are the only child of their parents

- `first-child` elements that are the first child of their parents

- `last-child` elements that are the last child of their parents

```CSS
/* every child after and including the 2nd child */
:nth-child(n + 2)
/* 7th child */
:nth-child(7)
/* syntax for even/odd children */
:nth-child(even | odd)
```

- `nth-child()` uses `An + B` notation to select elements from a list of children
based on occurrence

- `hover` applied when the cursor is hovering over the element

- `active` applied when the element is activated by the user

- `link` applied to unvisited links

- `visited` applied to visited links

- `valid` applied to forms or input fields with valid values

- `invalid` applied to forms or input fields with invalid values
