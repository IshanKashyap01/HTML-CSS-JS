# Webkit

- Webkit is a browser engine used by *Safari*, earlier by *Chrome*

- Different browsers use different engines that have their own experimental
properties

- These features are not standardized by the *WWW* and therefore, won't work
consistently across browsers

- Experimental or non-standard properties contains a prefix such as `-webkit-`,
`-moz-`, etc.

## Webkit Scrollbar

- `-webkit-scrollbar` is a *pseudo-element* that styles the scrollbar for elements
with scrollable overflow

- `scrollbar-width` and `scrollbar-color` are standard properties that override
it and can be used as an alternative

- To style the scrollbar for the webpage itself, we can use it by itself as follows:

```CSS
::-webkit-scrollbar
{
    width: 10px;
}
```
