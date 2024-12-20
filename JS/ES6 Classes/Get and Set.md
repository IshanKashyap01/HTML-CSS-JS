# Get and Set in JS

- `get` and `set` are accessors that acts as *getters* and *setters* in JS

```js
class Circle
{
    #radius
    constructor(radius)
    {
        this.#radius = radius >= 0 ? radius : 0
    }
    get radius()
    {
        return this.#radius
    }
    set radius(radius)
    {
        if(radius >= 0)
        {
            this.#radius = radius
            return
        }
        console.log('Invalid input')
    }
    get diameter()
    {
        return 2 * this.#radius
    }
    set diameter(diameter)
    {
        this.radius = diameter / 2
    }
}
```

- Both `get` and `set` syntaxes binds an object's property to a function

- `get`'s function is called on look-ups and `set`'s is called when there's an
attempt to set its value

- While `set` takes one parameter, `get` takes none
