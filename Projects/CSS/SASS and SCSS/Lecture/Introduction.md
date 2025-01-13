# Introduction to SASS & SCSS

- Plain CSS can often get too lengthy and become challenging to maintain

- Therefore, to make CSS more maintainable and efficient, we use *CSS preprocessors*

- They are tools that extend the functionalities of CSS by adding features like
*variables*, *nesting*, etc.

- **SASS** or *Syntactically Awesome Style Sheets* is one such CSS preprocessor

- It adds the following features to CSS:

    1. Variables

    2. Nesting

    3. Partials and imports

    4. Mixins

    5. Inheritance

    6. Operators

    7. Control directives and loops

    8. Functions

## How to Use SASS

- Once you've installed SASS, you can either manually compile your files to CSS
or let SASS do it for you

- To automatically compile files, you need to tell SASS the input and output files
and directories as follows:

```bash
# terminal command
sass --watch main.scss styles.css
```

```CSS
/* main.scss */
@use 'header';
@use 'main';
@use 'footer';
```

- If you're only watching one file like the `main.scss` above, SASS will compile
all the imported files into a single file in the output directory

- If the output location is a directory, then SASS will create as many output
files as being watched
