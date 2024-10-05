# Introduction to Box Model

- In HTML, all elements are enclosed in a box which consists of the following:

    ![image of the box](../multimedia/box.png)

- **Padding** is the space b/w an element and its border

- **Border** is a line providing a visual separation b/w the element it encloses
and its surroundings

- **Margin** is the invisible space around an element separating it from its
neighbours and the viewport

## Common Properties

- All properties for *padding*, *border* and *margin* that deal with the edges
of an element, takes one to four values as:

    1. specify one value for all four sides

    2. specify two values: first for *top & bottom* and second for *left & right*

    3. specify three values: first for *top*, second for *left and right* and
    third for *bottom*

    4. four values for each side in the following order: *top, right, bottom & left*
    (clock-wise)

- These properties have a dedicated `top`, `bottom`, `left` and `right` variation
as well

- For ex. `margin-left` `margin-right`, `margin-top`, etc.

## Box Sizing

- `box-sizing` sets how the total height and weight of an element is calculated

- `content-box` (default) border and padding dimensions are added to the element

- `border-box` border and padding are compensated from the element's dimensions
