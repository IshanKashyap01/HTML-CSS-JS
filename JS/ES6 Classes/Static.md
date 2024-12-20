# Static Keyword

- Static members of a class are those that are not a part of the objects of said
class but the class itself

- Therefore, objects cannot access static members of their class

```js
class Obj
{
    static property1
    static function1()
    {
        console.log('this is a static method')
    }
}
```

- Static methods are also inherited by subclasses however, they're static in them
as well
