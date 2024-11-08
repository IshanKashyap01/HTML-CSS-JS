# Arrays in JS

```js
let marks = [12, 13, 14, 10]
const student = ['John', 'Doe', 23, 'Commerce', 'XII', 'C', 55]
```

- Unlike languages like Java or C++, arrays in JS are **heterogenous**

- Moreover, you can add primitives, objects, arrays and even functions to them

- Arrays, like strings, also have the `length` property that prints the number
elements in an array

```js
const arr = [1, 2,] // trailing commas are valid syntax
arr[2] = 3 
/* the array arr itself is constant but its contents are not
 * Therefore, arr = ['ab', 'cd'] will throw an error
 * but the above code will not
 */
console.log(arr[10])
```

- The above code will not throw any errors and print `undefined` on the console

- That is, JS arrays don't have a fixed size and can be changed by assigning values
to new indices

- However, the size will only grow if you add a new value to any index but not
if you just try to access it
