# Introduction to ES6 Modules in JS

- We can write our JS code in multiple files and add them all in the HTML file

- However, not only is this not manageable, the ordering of files must also be
right for the code to work

## Breaking the Code

- Suppose you have broken your code as follows:

```cmd
index.html
main.js
modules/
    canvas.js
    square.js
```

- You need to add the `type` attribute with value `module` to your `script` tag

```html
<script type='module' src='main.js'>
```

- The `main.js` file will import the necessary variables and functions

- While the `canvas.js` and `square.js` will export them
