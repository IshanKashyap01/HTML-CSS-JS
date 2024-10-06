# Text Formatting Tags

- Tags that have an opening and closing tag, like `<html>`, `<head>` etc. are
called *paired tags*

- Tags like `<br>` don't have a closing tag and are therefore called *unpaired*
or *empty tags*

- An opening and closing tag along with the content b/w them are collectively
called an **HTML element**

## Heading Tags

```HTML
<h1>This is the main heading</h1>
<h2>This is a sub heading</h2>
```

- Heading tags are paired tags that defines different levels of heading in the
page body

- It is defined by `<hn>` where `n` ranges from 1 to 6 in decreasing order of
importance

## Paragraph Tag

```HTML
<p>
    This is a paragraph. This line will be followed by a line break.<br>
    This is the next line of the paragraph.
</p>
```

- The browser doesn't show the text exactly how it was written in the document

- Therefore, to create different paragraphs, text is enclosed with a `<p>` tag

- The `<br>` tag is used for a line break

## Emphasis Tags

```HTML
<i>This is italicized text</i> and <b>this is in bold</b>
<em>This is also italicized</em> and <strong>this is also bold</strong>
<u>This text will be underlined</u>
<del>This text is deleted i.e. has a strikethrough</del>
```

- `<em>` and `<strong>` are the HTML5 alternative of the `<i>` tag

## Formatting Tags

```HTML
H<sub>2</sub>O
n<sup>2</sup>
<pre>
This text
is preformatted.
That is, it will be displayed exactly as it is written in the HTML doc
</pre>
<q>This text is surrounded by a quote</q>
<hr>
```

- `<sub>` is used for subscript while `<sup>` is used for superscript

- `<hr>` tag adds a *horizontal rule* on the page
