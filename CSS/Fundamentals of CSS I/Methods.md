# Methods to Add CSS to HTML Pages

- CSS can be added to a webpage through *inline styles*, *internal* and *external*
*stylesheets*

- Precedence b/w the methods is decided as follows:

  - *inline* is given precedence over *internal*

  - If both *external and internal* are present in the `head` tag, precedence
  is given to whichever comes last

  - Otherwise, styles defined within the same tag (*inline/internal*) takes
  precedence

## Inline Styles

```HTML
<p style="property:value;">
    ...
</p>
```

CSS rules are added directly to the HTML tag itself using the `style`global
attribute

## Internal Stylesheet

```HTML
<head>
    <style>
        /* CSS script */
    </style>
</head>
```

CSS scripts are wrapped inside the `<style>` tag

## External Stylesheet

```CSS
/* styles.css */
h2
{
    color:blue;
    text-align:center;
}
```

```HTML
<!-- index.html -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

CSS is extracted into a separate file with a `.css` extension and linked to the
HTML document using the `link` tag
