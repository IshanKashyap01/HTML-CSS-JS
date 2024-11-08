# Switch Statement

```js
switch(color)
{
    case 'red': msg = 'stop'; break;
    case 'yellow': msg = 'slow down'; break;
    case 'green': msg = 'go on'; break;
    default: console.log('invalid color');
}
```

- The switch statement checks the expression against the values within the cases

- Without the `break` statement, every case after the first match one will be
executed

- It is best used as an alternative to `if-else if` statements for discrete
values
