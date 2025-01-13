# Media Queries

- Media queries gives you a way to apply CSS rules only when some browser and
device environment conditions are met

- In other words, they apply styles based on viewport size and other device
characteristics

- Following is the syntax for media queries:

```CSS
@media media-type and (media-feature-rule)
{
    ...
}
```

- **media-type** tells the browser what kind of media is this code for

- There are following three values for media-type: `print`, `screen` and `all`
(default)

- `and` is used to add more than one media type or feature rule to the query

- `media-feature-rule` a rule that must be met for the media query to be applied

- It can refer to properties such as height, width, orientation, etc.; for ex:

```CSS
@media all (orientation: portrait) {...}
@media print and (320px <= height <= 540px) {...}
@media screen and (min-width: 100px) and (max-width: 480px)
```
