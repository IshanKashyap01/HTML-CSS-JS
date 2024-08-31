# Input Tag

Input is sent as a *key-value* pair where the value is entered by the user and
key is defined by the programmer

```HTML
<form>
    <label for="un">Username</label>
    <input type="text" id="un" name="username" required>
    <br><br>
    <label for="pass">Password</label>
    <input type="password" id="pass" name="password" required minlength="6" maxlength="8">
    <br><br>
    <input type="submit">
</form>
```

## Types

- The type of input field can be specified through the `type` attribute

- `password` value can be used to create a password field

- `text` is used to create a text field

- `submit` creates a 'submit' button that resets the form and sends the inputs

- `reset` resets all input fields in the form to their initial/default values

- `number` type creates a *spinner* i.e. a numeric input field with an up and
down button to increasing/decreasing the value

## Attributes

- `name` attribute defines the *key* of the key-value pair

  - If an input field does not have a `name`, its data will not be sent

- `required` makes filling the field mandatory as the `submit` button won't work
otherwise

- `minlength` and `maxlength` specifies the minimum and maximum length of input
for the field

- `size` can be used to specify the size of the field in pixels

- `value` specifies the default value present in the input field

  - specifies the text written on the button for type `submit`

- `placeholder` is a descriptive text within the field that vanishes as
soon as you write something in it

- `readonly` restricts the user from modifying the value in the input field

- `disabled` is like `readonly` but also restricts user from interacting with
the field

- `pattern` specifies a regular expression for validating input

```HTML
<input type='number' step='5'>
```

- `step` specifies the offset for the increment/decrement for the buttons on a
spinner
