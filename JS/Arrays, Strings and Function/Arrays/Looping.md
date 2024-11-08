# Looping with Arrays

## For in Loop

```js
const arr = [3, 4]
// will print 0 and 1
for(let i in arr)
{
    console.log(i);
}
```

- The `in` variant will iterate over the index values of the array

- That is, the value of `i` will go from 0 to the last index

- However, unlike the normal for loop, `i` here, will be a `string` value instead
of a `number`

## For of Loop

```js
const arr = [3, 4]
// will print 3 and 4
for(let i of arr)
{
    console.log(i);
}
```

- Whereas, the `of` variant will iterate over the elements of the array

- That is, `i` will be assigned the elements of the array instead
