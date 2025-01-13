# Variables in CSS

- Also known as custom properties, CSS variables or cascading variables are used
to reuse values

- They are mainly used for common themes throughout the page like primary or
secondary colors, font-sizes etc.

- A variable can only be used in a selector if one of its ancestor declares that
variable

- In other words, a variable can only be used within the scope it is declared
in

```CSS
:root
{
    --primary-color: orange;
}
h1
{
    color: var(--primary-color);
}
```

- `:root` pseudo class is equivalent to `html` but has a higher specificity

- Therefore, it is the best way to declare global variables for the document

- Variables are declared by prefixing the name with double dashes (`--`) and
used with the `var()` function
