# Exporting

- To export functions or variables, add the `export` keyword before declaration

```js
export const shape = 'square'
export function draw()
{
    // function logic here...
}
```

- Adding `default` keyword to an exported element will allow you to change its
name while importing

```js
export default (response) => response.json()
```

- However, there can only be *one default import* per file

- You can also export everything at once as well:

```js
export {shape, draw}
```
