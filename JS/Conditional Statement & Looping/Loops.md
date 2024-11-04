# Loops in JS

## For Loop

```js
for(let i = 0; i < 10; i++)
{
    console.log('hello');
}
```

- The for loop contains three statements: *initialization*, *condition*, *updation*

- It is best used when you know exactly how many times the loop is supposed to run

```js
for(let fruit of fruits)
{
    console.log(fruit);
}
```

- Above is the *for-each* variant of Javascript's for loop

## While Loop

```js
while(condition)
{
    ...
}
```

It is best used as when you're not sure exactly how many times the loop should
iterate

## Do While Loop

```js
do
{
    ...
} while(condition);
```

It is best used as an alternative to the `while` loop when the loop must iterate
*at least once*
