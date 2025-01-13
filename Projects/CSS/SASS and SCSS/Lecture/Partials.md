# Partials

- You can create partial SASS files that contain snippets of SASS code that you
can include in other SASS files

- Partial files do not get compiled into separate CSS files

- Therefore, they're a great way to modularize your SASS and makes it easier to
maintain

- Partial files are created by prefixing an *underscore* (`_`) in the file name

```css
@use 'base';
```

- A partial file can be included to any other file via the `@use` at-rule as above

- SASS will maintain namespaces based on your files to avoid conflicts
