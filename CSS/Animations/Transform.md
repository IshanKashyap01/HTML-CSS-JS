# Transform

```CSS
transform: rotate() | scale() | skew() | translate();
```

- `scale()`, `skew()` and `translate()` accept either one value for `x` co-ordinate
or two values for both `x` and `y` respectively

- All the above functions work on the 2D plane

- They also have a `function3D()` counterpart as well that works on the 3D plane

- Therefore, they all have `functionX()` and `functionY()` counterparts

- Moreover, the `function3d()` has a `functionZ()` counterpart as well

## Rotate

```CSS
transform: rotate(360deg) | rotate(1turn);
```

- Rotates an element around a fixed point by specified degrees or turns

- By default, rotates around the z-axis

## Scale

```CSS
transform: scale(1.2);
```

Scales the element up or down by the specified factor

## Skew

```CSS
transform: skew(30deg, 20deg);
```

Skews the element

## Translate

```CSS
transform: translate(10%, 20%);
```

Moves the element from its position
