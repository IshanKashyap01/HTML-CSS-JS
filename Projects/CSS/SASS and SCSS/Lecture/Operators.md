# Operators

- SASS allows mathematical operations such as `+`, `-`, `*`, and `%`

- Moreover SASS also allows these relational operators: `==`, `!=`, `<`, `<=`,
`>`, and `>=`

- `and`, `or` and `not` can be used for boolean checks and `+`, `-` and `/` can
be used to concatenate strings

- `@debug` at-rule prints the value of an expression along with the file name
and line number

- To use divide, we have to use the built-in `math` module as: `math.div()`

```css
@debug 1px == 1px;
@debug math.div(500, 2);
```

- The math module also contains the `min()`, `max()`, `floor()`, `round()` and
`ceil()` functions
