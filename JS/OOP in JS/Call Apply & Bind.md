# Call, Apply and Bind Functions

## Call

```js
const vehicle = {
    name: 'vehicle', 
    color: 'no',
    print(brand, seats)
    {
        console.log(`${this.color} ${brand} ${this.name} with ${seats} seats`)
    }
};
const car = {name: 'car', color: 'blue'}
// blue Porsche car with 2 seats
vehicle.print.call(car, 'Porsche', 2)
```

- `call()` calls a function after binding its `this` to the object passed as the
first parameter

- The remaining parameters are the arguments of the function

## Apply

```js
// blue Porsche car with 2 seats
vehicle.print.apply(car, ['Porsche', 2])
```

It is the same as `call()` except it takes the function arguments in an array

## Bind

```js
const bus = {name: 'bus', color: 'yellow'}
bus.print = vehicle.print.bind(bus)
// yellow Gold bus with 30 seats
bus.print('Gold', 30)
```

Returns a new function with its `this` bound to the passed object
