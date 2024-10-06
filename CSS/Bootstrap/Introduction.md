# Introduction to Bootstrap

- Bootstrap is a free and open-source front-end framework used to design
*responsive* and *mobile-first* websites

- It provides pre-designed HTML, CSS and JS components for creating consistent
and visually appealing layouts quickly

- It also includes utility classes to style elements without writing custom CSS

## Getting Started with Bootstrap

1. Add the below `link` tag in your HTML page's `head` element

    ```HTML
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet" 
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
    crossorigin="anonymous">
    ```

2. Add the below `script` tag at the end of your `body` element

    ```HTML
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
    crossorigin="anonymous"></script>
    ```

    - You can add this `script` tag to your `head` as well if you add the `defer`
    attribute to it
