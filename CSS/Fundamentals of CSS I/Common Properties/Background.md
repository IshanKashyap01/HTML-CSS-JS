# Background Related Properties

## Background Color

- `background-color` sets the background color of an element

- There are over 140 named colors in CSS, while others can be used with functions
like `RGB` and `HSL`

## Background Image

```CSS
background-color:url(multimedia/image.jpg);
```

- `background-image` sets a background image for an element using the `url()`
function

- The image location can be absolute, relative, or a hyperlink

## Background Repeat

- `background-repeat` sets how background images are repeated

- A bg-image can be repeated along the *x-axis*, the *y-axis* or *not at all*

- Following are the possible set of values for this property:

    1. `repeat` (default) repeats the image as many times as needed to cover the
    whole background

    2. `no-repeat` the image is not repeated regardless of whether it'd cover
    the whole background or not

    3. `space` the image is repeated as much as possible without clipping while
    white spaces are distributed evenly b/w images

    4. `repeat-x` repeats the image along the *x-axis*

    5. `repeat-y` repeats the image along the *y-axis*

## Background Position

```CSS
background-position: center
...
background-position: 25% 75%
```

- `background-position` sets the position for background images, which are *by*
*default* positioned at the top-left

- Values include `center`, `left`, `right`, `top`, `bottom` and `<position>`

- *x-y co-ordinates* can also be given by themselves or along with the values above

## Background Size

- `background-size` sets the size of an element's background image

- Values can be in absolute units, relative size (%) or one of the following:

    1. `contain` scales the image as large as possible without stretching or
    cropping

    2. `cover` scales the image while preserving the aspect ratio but may crop
    parts of the image

    3. `auto` (default) image is displayed in its original size

## Background Attachment

- `background-attachment` sets whether the background image's position is fixed
or not w.r.t the viewport

- `scroll` (default) image scrolls with the element

- `fixed` image will not move with the element on scrolling
