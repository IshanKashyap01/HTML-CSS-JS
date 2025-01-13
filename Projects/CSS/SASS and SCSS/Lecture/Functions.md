# Functions

## Built-in Modules

- SASS has many built-in modules that comes with their own set of functions

- These modules are `math`, `string`, `color`, `list`, `map`, `selector` and
`meta`

- The color module includes functions like `complement()`, `lighten()`, and
`darken()`

## User Defined Functions

```css
@function complement-and-darken($color)
{
    $dark: darken($color, 20%);
    $comp: complement($dark);
    @return $comp;
}
```

- `@function` at-rule defines functions and works similar to mixins

- However, functions can also return a value using the `@return` at-rule
