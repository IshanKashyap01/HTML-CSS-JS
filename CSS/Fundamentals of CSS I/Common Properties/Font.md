# Font Related Properties

## Font Family

- `font-family` specifies a *comma-separated priority list* of font family names
or generic family names

- The browser will select the first font installed/available

- You should provide at least one generic font to fallback on, since there's no
guarantee that any given font is available

## Font Weight

- `font-weight` sets the *boldness* of the font with values ranging from 1 to 1000

- Other than numerical values, following special values can also be used:

    1. `normal` same as $400$

    2. `bold` same as $700$

    3. `lighter` one relative font-weight lighter than the parent element

    4. `bolder` one relative font-weight bolder than the parent element

## Font Style

- `font-style` sets whether the text should be styled with a normal, italic or
oblique face from its *font family*

- Possible values include `normal`, `italic`, `oblique` and `oblique <angle>`

## Font Size

- `font-size` sets the size of the font; changing font-size also updates the base
size for relative units such as `em`, `ex` etc.

- Values include `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`,
`xx-large` and `xxx-large` for absolute units

- Whereas `larger` and `smaller` as relative units
