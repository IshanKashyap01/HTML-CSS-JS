# Transition Timing Function

```CSS
transition-timing-function: linear | ease-in | ease-out | ease-in-out | steps(n, <jumpterm>) | step-start | step-end;
```

Lets you establish an acceleration curve so the speed of transition can vary
over its duration

- `linear` (default) transitions at an even speed

- `ease-in` starts off slowly with increasing speed until the end

- `ease-out` starts quickly but slows down as the transition continues

- `ease-in-out` transitions slowly, speeds up, then slows down again

- `steps()` takes `n` stops during the transition, displaying each stop for the
same amount of time

- Following are the values for the `<jumpterm>`

  - `jump-start` first jump happens at the beginning of the transition

  - `jump-end` last jump happens when the transition ends

  - `jump-both` includes a pause at both the start and end of the transition

- `step-start` same as `steps(1, jump-start)`

- `step-end` same as `steps(1, jump-end)`
