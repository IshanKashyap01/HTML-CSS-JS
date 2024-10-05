# Structural Tags

- Structural tags can be divided into two categories: *Block-level* and *Inline*

- Remember how you need a line break after `img`, `input` and `button` elements
but not after headings

- This is because, some elements consume just enough space while other take the
entire block they're in

- Such elements are called *inline* and *block* elements respectively

- For ex. the paragraph (`p`) and heading elements are all block elements whereas
`img`, `b`, `i` etc. tags are inline elements

## Div & Span

```HTML
<div>
    <p>This is an example of <span>div and span tags</span>
</div>
```

- `<div>` and `<span>` elements are tags that provide block and inline organization
of elements respectively

- Using `div` we can make an inline element possess the entire block

- `div` and `span` are *generic containers* used for grouping content but don't
provide any semantic meaning about their content
