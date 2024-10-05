# Dropdown List

```HTML
<label for="preference">Accommodation</label>
<select id="preference" name="accommodation">
    <optgroup label="Hotels">
        <option value="3 star">3 star</option>
        <option value="4 star">4 star</option>
        <option value="5 star">5 star</option>
    </optgroup>
    <option value="Resort" selected>Resort</option>
    <option value="Villa">Villa</option>
</select>
```

- `<select>` creates a drop down list of multiple values to select from

- `<optgroup>` groups together multiple options under the name specified in its
`value` attribute

- `<option>` specifies a value inside the list where the value to be sent is
specified by `value` attribute

- `selected` attribute makes an option selected by default

- `multiple` attribute can be added to `<select>` to allow for multiple selections
