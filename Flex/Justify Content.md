# Justify Content

```CSS
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch
```

Defines how the browser distributes space b/w and around the content items along
the *main axis*

- `flex-start` elements are packed tightly in the direction of the main axis

- `flex-end` same as above but in the opposite direction

- `center` same as above but in the center of the container

- `space-between` adjacent elements are evenly spaced such that the full size
of the container is covered along the main axis

- `space-around` same as above but the extra space that would be left in `flex-start`
or `flex-end` is evenly divided b/w the start and end of the container

- `space-evenly` equal spacing b/w adjacent elements and flex start & end edges
of the container

- `stretch` evenly increases the size of all `auto`-sized elements wrt the main
axis such that there is no extra space left

  - Behaves like `flex-start` for elements without `auto`

  - Respects `max-height`/`max-width` constraints as well
