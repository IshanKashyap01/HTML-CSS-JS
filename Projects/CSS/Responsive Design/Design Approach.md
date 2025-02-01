# Web Design Approaches

## Mobile-first vs Desktop-first

- Until now, we have followed the desktop-first approach by writing our CSS
for desktop

- In this approach, we then use media queries for tablets and mobile devices

- However, in mobile-first approach, we write our CSS wrt mobile devices

- Then we use media queries to write rules for tablets and desktop

- This approach is best-suited for sites that are expected to have a majority
of its viewers visiting it from a mobile device

## Responsive Typography

- It is a technique that ensures your text adapts to different screen sizes and
remains readable and pleasant

- This is done by utilizing relative units such as `vw`, `%`, `rem` etc.

- For dynamic font changes, `%` or viewport units such as `vw`, `vh`, etc. can
be used

  - `vw` and `vh` refers to the width and height of the viewport respectively

  - While `vmin` and `vmax` refers to the minimum and maximum of the two

- Alternatively, `em` and `rem` can be used with media queries
