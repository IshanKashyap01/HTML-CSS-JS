# Radial & Conic Gradient

## Radial Gradient

```CSS
background: radial-gradient(ellipse at 20%, black 25%, rgb(255, 255, 212));
background: radial-gradient(closest-side circle at 10px 20px, red, blue, green)
```

- Aside from colors, we can also provide the shape as `ellipse` or `circle`

- `closest-side` ending shape meets at the side closest to the center of the
gradient

- `farthest-side` ending shape meets at the side farthest to the center of the
gradient

## Conic Gradient

```CSS
background: conic-gradient(from 135deg at 25% 50%, violet, indigo, blue, green, yellow, orange, red);
```

We can specify the angle at which the gradient starts as well as the co-ordinates
for the center
