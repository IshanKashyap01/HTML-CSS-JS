# Pseudo Elements

- Pseudo elements are keywords added to a selector to style a part of an element

```CSS
p::after
{
    content: " ✅ ";
}
a::before
{
    content: attr(href);
}
```

- `after` creates a pseudo-element as the *last child* of the selected element

- `before` creates a pseudo-element as the *first child* of the selected element

- Both `after` and `before` creates an *inline* pseudo-element by default

- `first-letter` styles the first letter of an element

- `first-line` styles the first line of an element

- `placeholder` represents the placeholder text of an `input` or `textarea` field
