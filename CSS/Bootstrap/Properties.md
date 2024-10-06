# Various CSS Properties with Bootstrap

## Display & Spacing in Bootstrap

```HTML
<div class="mt-1 mb-2 ms-3 p-4 d-block"></div>
```

- `m` stands for `margin`, `p` for `padding` and `d` for display

- `t`, `b`, `x` and `y` can be used with margin and padding for top, bottom,
horizontal and vertical respectively

- Whereas `s` and `e` can be used for start and end for classes based on whether
they are L-R or R-L

- Meanwhile, negative margin can be given as `m-n1`

- `w` and `h` can be used for height and width with their associated numbers being
in percent

## Buttons & Alerts

```HTML
<div class="btn-group">
    <button class="btn btn-primary">Submit</button>
</div>
```

- `btn` class styles the element as a button

- `btn-primary`, `btn-secondary`, `btn-success`, etc. will provide colors to the
button just like their `text` counterpart

- `btn-outline-` class styles the button such that only the outline is colored
initially, and the button fills with color on hover

- `btn-group` will align and connect the buttons within the container

```HTML
<div class="alert alert-primary">
    This is an alert.
    <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

- `alert` class styles the container as an alert and can contain a close button

## Cards & Modals

### Card

- `card` class styles the container as a card with its own header, footer, title
and content

```HTML
<div class="card-group">
    <div class="card">
        <div class="card-header">Header</div>
        <img src="" alt="" class="card-image">
        <div class="card-body">
            <div class="card-title">Card Title</div>
            <div class="card-subtitle">Card Subtitle</div>
            <div class="card-text">Card text</div>
        </div>
        <div class="card-footer">Footer</div>
    </div>
</div>
```

- `card-img-overlay` can be used in addition to `card-body` to make the body of
the card appear over the image instead of below it

- `card-group` will make the cards within the container appear side-by-side

### Modal

```HTML
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalId">
    Toggle Modal
</button>
<aside class="modal">
    <div class="modal-dialog modal-dialog-scrollable">
        ...
        <button class="btn-close" data-bs-dismiss="modal"></button>
    </div>
</aside>
```

- `modal` works similar to `card` as it can also have header, body and footer

- It can also contain buttons to close it or some other functionalities

- `modal-dialog` and `modal-dialog-scrollable` classes make the modal look like
a popup dialog window with scrollable text
