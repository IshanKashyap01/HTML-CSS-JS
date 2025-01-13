# Loops

## For Loop

```css
$initial-margin: 1%;
@for $i from 1 through 100
{
    .m-#{$i}
    {
        margin: $initial-margin * $i;
    }
}
```

- `@for` at-rule defines a for loop, `from` the start, and `through` or `to` the
final value of the variable

- In the above code, `#{$i}` is used to concatenate the value of `$i` as a string

- The above code will create hundred classes in the format `m-i`

## Each Loop

```css
$list: 10, 20, 40, 80;
@each $i in $list
{
    .img-size-#{$i}
    {
        width: #{$i}px;
        height: #{$i}px;
    }
}
```

- `@each` loop iterates through each element of a list or each pair in a map

- We can use it to iterate through a map as follows:

```css
@each $key $value in $map
{
    .btn-#{$key}
    {
        background-color: $value;
    }
}
```

- Loops can also be nested in any permutation or combination along with conditionals
