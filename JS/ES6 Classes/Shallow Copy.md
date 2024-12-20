# Shallow Copy in JS

- A shallow copy of an object is a copy whose *properties shares the same*
*references as the original*

```js
const obj3 = {...obj1}
const obj4 = Object.assign({}, obj1)
```

- The *spread operator* will destructure the object into its key-value pairs

- `Object.assign()` copies all the *enumerable own properties* from one or more
source to the target object

```js
// will print true
console.log(obj1.marks === obj3.marks && obj1.marks === obj4.marks)
```

- However, in both methods, if a property is assigned an object, its *reference*
will be copied

- Therefore, any changes to said object will be reflected in both the original
and the copy
