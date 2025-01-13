# Nesting

Instead of writing down `.card .header`, `.card .footer`, etc. we can use nesting
in `SASS` and `SCSS` as follows:

```css
.card
    width: 300px
    height: 400px
    .header
        width: 100%
```

```css
.card
{
    width: 300px;
    .header
    {
        transition
        {
            property: all;
            duration: 1s;
        }
    }
}
```

## Parent Selector

```scss
.card
{
    &:hover
    {
        background-color: blue;
    }
    .header
    {
        &::before
        {
            content: "#";
        }
    }
}
```

- To use pseudo classes and elements, we can use *parent selector*, denoted by
`&`

- In the above code, the `card` class will have a background color `blue` on
hover

- While `.header` class will have a `#` before it
