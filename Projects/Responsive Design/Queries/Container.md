# Container Queries

- Container queries allows you to style your elements based on the size of their
container

- In order to use container queries, we need to do the following:

## Declare an Element as a Container

```ebnf
article
{
    container-name: <name> && <name>*;
    container-type: normal | size | inline-size;
}
```

### `container-name`

- Specifies the name for a container; more than one name can be given

- It is optional if we can classify containers based on type alone

### `container-type`

- Defines the element as a container that can be used for container queries

- Allows the browser to track its size and trigger style changes accordingly

- It can accept the following values:

    1. `normal` (default) element will not be treated as a container

    2. `size` both dimensions of the element will be tracked

    3. `inline-size` only the width of the element will be tracked

### `container`

```ebnf
container: <container-name> && [/ <container-type>]*
```

Shorthand for `container-name` and `container-type` that either accepts the name
or both the name and type

## Use the Container Query

```CSS
@container <container-name> (condition) {...}
```

Valid conditions include, but are not limited to the following:

- Dimensions: `height`, `width`, `min-width`, `max-width`, `min-height`, `max-height`
and,

- Aspect ratio: `min-aspect-ratio` and `max-aspect-ratio`
