# Animation Fill Mode

```CSS
animation-fill-mode: none | forwards | backwards | both;
```

Sets how a CSS animation applies styles to its target before and after its execution

- `none` (default) no styles will be applied when the animation is not executing

- `forwards` target will retain the styles applied by the last keyframe of the
execution

- `backwards` applies the styles defined in the first keyframe as soon as its
applied to the target and retains them during the delay period

- `both` Combines `forward` and `backwards`

Properties applied in `forwards` and `backwards` depends on the direction of the
animation
