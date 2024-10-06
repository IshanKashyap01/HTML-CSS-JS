# Lists in HTML

## Unordered Lists

```HTML
<ul>
    <li>This is</li>
    <li>an unordered</li>
    <li>list</li>
</ul>
```

- `<ul>` creates an unordered list and has the `type` attribute with three values:

    1. `disc` (default value)
    2. `circle`
    3. `square`

- `<li>` denotes a *list item* and can be used with both ordered and unordered lists

## Ordered Lists

- `<ol>` is used to create an ordered list and has the same syntax as `<ul>`

- The `type` attribute of `<ol>` has the following three values:

    1. `1` for numbers (default value)
    2. `A` or `a` for alphabets
    3. `I` or `i` for roman numerals

- It has another attribute called `start` that defines the starting value of the
list

- Lists can also be nested in any permutation and combination

## Descriptor Lists

```HTML
<dl>
    <dt>Noun</dt>
    <dd>Description 1 of noun</dd>
    <dd>Description 2 of noun</dd>
</dl>
```

- `<dl>`: *descriptor lists*

- `<dt>`: *definition term*

- `<dd>`: *definition description*
