# Variables

- Unlike CSS variables, SASS variables can be reassigned a new value

```css
$primary-color: orange;
.card
{
    color: $primary-color;
}
$primary-color: darkblue;
.footer
{
    color: $primary-color
}
```

- In the above code, `.card`'s color is `orange` while `.footer`'s color is
`darkblue`

- `-` and `_` are considered the same in `SASS` therefore, variable names `m-1`
and `m_1` refer to the same variable

- We can also create lists and access their elements as follows:

```css
$img-size: 50, 60, 70, 80, 90, 100;
.card
{
    width: nth($img-size, 1);
}
```

- SASS also allows creating and accessing maps with key-value pairs as follows:

```css
$colors:
(
    "primary": white;
    "secondary": black;
);
@debug map.get($colors, "primary"); 
```
