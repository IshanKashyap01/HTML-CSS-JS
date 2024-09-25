# More on Selectors

We can assign *more than one class* to an element as follows:

```HTML
<p class="size font">...</p>
```

## Universal Selector

```CSS
*
{
    ...
}
```

Represented by a `*`, it defines properties common for all elements

## Attribute Selector

- It matches those elements that have explicitly defined the given attribute

- We can also specify an exact value or a substring match for the attribute

```ebnf
tag[attribute | attribute O string | attribute O string C]

C -> i | s
O -> ~= | $= | ^= | *= | =
```

- Adding `i` or `I` at the end specifies a *case-insensitive* match while `s` or
`S` specifies *case-sensitive* match

- `~=` value is a whitespace separated list of words, one of which is an *exact*
*match*

- `$=` string is the *suffix* of the value

- `^=` string is the *prefix* of the value

- `*=` value contains *at least one occurrence* of the string

```CSS
a[href^="https"][href$=".com"]
```
