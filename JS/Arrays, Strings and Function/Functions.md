# Functions in JS

```js
function print(message)
{
    console.log(message);
}
```

- Functions in JS are created by using the keyword `function` as it is dynamically
typed

- Parameters are optional and as such there can be no or any number of them

- Parameters cannot have a declaration keyword prefixed and they have a function
scope

- You can provide default values to parameters as:

```js
function func(a, b = 0)
{
    return a * b;
}
```

- However, parameters with default values must always come after the ones without
