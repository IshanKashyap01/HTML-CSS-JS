# Audio & Source Tags

## Audio Tag

```HTML
<audio src = "multimedia/audio.mp3" controls autoplay muted>
    audio not supported
</audio>
```

`<audio>` tag is the same as the `<video>` tag except it doesn't have the `width`
and `height` attributes

## Source Tag

```HTML
<audio controls autoplay muted>
    <source src = "multimedia/audio.mp3" type = "audio/mp3">
    <source src = "audio_location.com/audio.mp3">
</audio>
```

- `<source>` tags are used as an alternate to the `src` attribute in the `audio` and
`video` tags

- There can be any number of `source` tags to ensure that the media is played

- `src` attribute works the same as in `audio` and `video`

- `type` attribute tells the browser the type and extension of the media referred
in the `src` tag
