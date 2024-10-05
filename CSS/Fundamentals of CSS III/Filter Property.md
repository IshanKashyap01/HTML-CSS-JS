# Filter Property

- `filter` property applies graphical effects like blur or color shift to an element

- It is commonly used to adjust images, backgrounds and borders

- Several functions such as `blur()`, `contrast()`, `hue-rotate()` etc. are used

## Backdrop Filter

- `backdrop-filter` applies graphical effects to the area behind an element

- To see the effects it applies, the element must not be opaque

- The same functions as the `filter` property can be applied

## Functions

- `blur()` applies a [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur)
to the image

- `opacity()` changes the opacity of an element; 0 or 0% represents transparent
while 1 or 100% represents opaque

```CSS
filter: drop-shadow(x y blur color);
```

- `drop-shadow()` applies a drop shadow to an image

- `hue-rotate()` rotates the hue of an element and its content by the specified
degree

- `invert()` inverts the colors of the image by the specified value
