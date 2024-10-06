# Combinators

- A combinator is a combination of two or more selectors together

- Properties are defined only for the last selector while others are used to
define a relationship

## Descendant Combinator

```CSS
body article p
{
    ...
}
```

- It combines two selectors such that the latter is a descendant (child, grandchild,
etc.) of the former

- It is represented by a single space character `" "`

## Child Combinators

```CSS
article > p
```

Placed b/w two selectors, it only matches those elements where the latter is a
direct child of the former

## Next-Sibling Combinator

```CSS
h1 + p
```

- Placed b/w two selectors, it only matches elements siblings where the latter
appears after the former

- If the latter appears more than once, only the first one is matched

## Subsequent-Sibling Combinator

```CSS
h1 ~ p
```

Unlike *next-sibling combinator*, it matches all the instances of the latter that
appear after the former with the same parent
