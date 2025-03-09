# Importing

```js
import handleAPIResponse, {shape, draw} from './canvas.js'
```

- For `default` exports, you can give a name directly

- While for other exports, you have to use the `as` keyword for renaming

```js
import {f1 as function1} from './square.js'
```

- To import everything that could be imported from a module, use `*` with an
alias

```js
import * as canvas from './canvas.js'
console.log(canvas.shape)
canvas.draw()
```
