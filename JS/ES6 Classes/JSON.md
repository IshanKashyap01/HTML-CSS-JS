# JavaScript Object Notation

- JSON is a *text-based data format* that follows JavaScript's object syntax

- However, it can be used independently from JS as many programming languages
can parse and generate it

- JSON exists as a string which can be stored in its own file with an extension
of `.json`

## Rules of JSON

- Although JSON's syntax is similar to that of JS, it is more stricter

- JSON objects can only contain *key-value* pairs but *no expressions or functions*

- These keys can contain *null, objects, arrays, strings and numbers* as values

```JSON
{
    "person":
    {
        "name": "John Doe",
        "age": 29,
        "subjects": ["Maths", "Science", "English"]
    },
    "array":
    [
        null,
        {
            "key": "value"
        },
        2.9,
        "1234567890",
        [1, 2, 3]
    ]
}
```

- Property names (keys) and strings must be enclosed in *double quotes only*

- A valid JSON file can have objects, arrays or a single string or a number

- JSON is *data only* and does not allow comments

## JSON and JavaScript

```js
const obj = {key: "value"}
const json = JSON.stringify(obj)
const obj2 = JSON.parse(json)
// will print true
console.log(obj.key === obj2.key)
```

- `JSON` is a *built-in global object* in JavaScript with *static* methods

- `parse()` converts a JSON string into a JS value

- `stringify()` converts a JS value into a JSON string
