# Selector

- A *selector* is can be one of the following (in order of precedence):

    1. `ID`

    2. `Class`

    3. `Type` i.e. an HTML element

```CSS
/* elements are mentioned as is, classes are prefixed with a dot while IDs are
prefixed with a hash */
h2 {...}
.class{...}
#id{...}
```

- While `ID`s are unique for each HTML element, multiple elements can share the
same *class* name

- In case of overlapping b/w the same selector, the former will be ignored; this
is known as *cascading*

- That is, if the same property for the same selector is mentioned more than once,
then the last one will be applied

```CSS
h2 /* this will be ignored */ 
{
    margin: 1px;
}
...
h2 /* this will be used */ 
{
    margin: 2px;
} 
```
