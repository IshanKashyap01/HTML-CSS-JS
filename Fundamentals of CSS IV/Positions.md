# Positions in CSS

- `position` property specifies how an element is positioned in a document

- While the `top`, `left`, `right` and `bottom` properties determine the final
location

- Meanwhile, the `z-index` decides the overlapping order

## Position Values

### Static

- `static` (default) positions according to the normal flow of elements

- `top`, `bottom`, `left`, `right` and `z-index` properties will have no effect

### Relative

- `relative` positions according to the normal flow but can be offset relative
to itself

- offset does not affect any other elements so it will overlap the elements in
its new position

- Moreover, its original position would be empty but unchanged

### Absolute

- `absolute` removes the element from the normal flow, leaving no space behind

- Similar to `relative`, it will also overlap with the elements in its new position

- Moreover, the element will behave like an inline element and be stuck in its
new position

### Fixed

- `fixed` behaves similar to `absolute` except the element's position will be
relative to the viewport

- That is, even when we scroll the page, it will stay in the same position

- In printed documents, the element will be present in the same position on every
page

### Sticky

- `sticky` is a combination of `fixed` and `relative` that is:

  - Initially, it will be positioned according to the normal flow of the document

  - However, it will be offset to the viewport instead of the page

- Therefore, once we start scrolling, it will get fixed on the viewport when it
reaches the specified position
