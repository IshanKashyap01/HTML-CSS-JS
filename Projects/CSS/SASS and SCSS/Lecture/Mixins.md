# Mixins

- Mixins allows reusing property-value pairs by encapsulating them in a `mixin`
at-rule

```css
@mixin border-style
{
    border: 1px solid lightgreen;
    border-radius: 10px;
}
.card
{
    @include border-style;
    padding: 1.5rem;
    margin: 2rem;
}
```

- Mixins can also be passed arguments and default values to allow for further
customization

```css
@mixin box($color: blue, $radius: 0.5rem)
{
    border: 1px solid $color;
    border-radius: $radius;
}
.card
{
    @include box(10px);
}
```
