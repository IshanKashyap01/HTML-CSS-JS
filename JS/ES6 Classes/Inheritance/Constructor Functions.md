# Inheritance in Constructor Functions

Construct functions can use inheritance in the following two steps:

```js
function Parent(key, value)
{
    this.key = key
    this.value = value
}
function Child(key, value)
{
    // step 1
    Parent.call(this, key, value)
}
// step 2
Child.prototype = Object.create(Parent.prototype)
```

## Step 1

Copy all of the parent's own properties into the child

- Call the parent's constructor function in the child's context using `call()`

  - However, the child won't have access to any properties in the *parent's*
*prototype chain*

## Step 2

Join the parent's prototype to the *child's prototype chain*

- Create an object using the Parent's prototype (which will have all its
inherited properties)

- Assign this object to the child's prototype so the child now has the
parent in its *prototype chain*
