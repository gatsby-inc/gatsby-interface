This folder contains a set of skeleton components to be used for building accessible forms.

## Usage

All skeleton `*FieldSkeleton` components are compound components, each exposing the following components:

- `*FieldSkeleton`
- `*FieldSkeleton.Label` &mdash; a wrapper for either `<label />` or `<legend />` element
- `*FieldSkeleton.Error` &mdash; a wrapper for `<div />` element to display a error message
- `*FieldSkeleton.Hint` &mdash; a wrapper for `<div />` element to display a hint text

In addition to that, a `*FieldSkeleton` component can expose either of these:

- `*FieldSkeleton.Option` and `*FieldSkeleton.OptionLabel` &mdash; used exclusively by `CheckboxGroupFieldSkeleton` and `RadioButtonFieldSkeleton` to allow for customizing their options.
- `*FieldSkeleton.Control` &mdash; a component that renders the control for components that either do not offer a choice of options (text fields) or don't need to emphasize their options (selectors and confirmation checkboxes). In most cases it is just a wrapper for an HTML element (e.g. `InputFieldSkeleton.Control` is a wrapper for `<input />`).

### Field props

Every `*FieldSkeleton` component accepts these props:

- `id: string` &mdash; passing an ID is required to create relationships between the field controls, label and hint/error messages
- `hasHint?: boolean` &mdash; whether the hint message should be displayed
- `hasError?: boolean` &mdash; whether the error message should be displayed

`CheckboxGroupFieldSkeleton` and `RadioButtonFieldSkeleton` also support `style` and `className` props that are passed to the `<fieldset />` element rendered by them to allow custom styles.

### Field.Label

`*FieldSkeleton.Label` renders either a `<label />` or a `<legend />` element and accepts all of the props supported by those, with the exception of `htmlFor`.

### Field.Error

`*FieldSkeleton.Label` renders a `<div />` with your error message, the message is only displayed when `hasError` is set to `true` for `*FieldSkeleton`. You can configure the error level by passing `validationMode`:

```jsx
// error message is announced by the screen reader as soon as "hasError" is changed to true
// can be useful fields like new password
<InputFieldSkeleton.Error validationMode="change">This field is required</InputFieldSkeleton.Error>

// error message is announced by the screen reader when the user enters/leaves the field
<InputFieldSkeleton.Error validationMode="focus">This field is required</InputFieldSkeleton.Error>

// same as validationMode="submit", error message is not announced by the screen reader on
<InputFieldSkeleton.Error>This field is required</InputFieldSkeleton.Error>
```

### Field.Hint

`*FieldSkeleton.Label` renders a `<div />` with your hint text, the text is only displayed when `hasHint` is set to `true` for `*FieldSkeleton`.

### Examples

Here's an example of rendering an input field in your component:

```javascript
import { InputFieldSkeleton } from "gatsby-interface"

function MyInput() {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState("")

  const onChange = e => {
    const nextValue = e.target.value

    setError(
      nextValue.length > 8 ? "Your username exceeds the limit of 8 symbols" : ""
    )
    setValue(nextValue)
  }

  return (
    <InputFieldSkeleton id="my-input" hasError={!!error} hasHint>
      <InputFieldSkeleton.Label>Username</InputFieldSkeleton.Label>
      <InputFieldSkeleton.Control
        type="text"
        value={value}
        onChange={onChange}
      />
      <InputFieldSkeleton.Error>{error}</InputFieldSkeleton.Error>
      <InputFieldSkeleton.Hint>Max length: 8 symbols</InputFieldSkeleton.Hint>
    </InputFieldSkeleton>
  )
}
```

Displaying a checkbox group field:

```javascript
import { CheckboxGroupFieldSkeleton } from "gatsby-interface"

const options = [
  `Assire var Anahid`,
  `Francesca Findabair`,
  `Fringilla Vigo`,
  `Ida Emean aep Sivney`,
  `Keira Metz`,
  `Margarita Laux-Antille`,
  `Philippa Eilhart`,
  `Sabrina Glevissig`,
  `Sheala de Tancarville`,
  `Triss Merigold`,
  `Yennefer of Vengerberg`,
].map(name => {
  return {
    label: name,
    value: name.toLowerCase().replace(/\s/g, `-`),
  }
})

function MyCheckboxGroup() {
  const [value, setValue] = React.useState([])
  const [error, setError] = React.useState("")

  const onChange = e => {
    const optionValue = e.target.value

    const nextValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue]

    setError(
      nextValue.length === 0 ? "You have to select at least one option" : ""
    )
    setValue(nextValue)
  }

  return (
    <CheckboxGroupFieldSkeleton
      id="my-checkbox-group"
      hasError={!!error}
      hasHint
    >
      <CheckboxGroupFieldSkeleton.Label>
        Lodge of Sorceresses
      </CheckboxGroupFieldSkeleton.Label>
      {options.map(({ label, value }) => (
        <React.Fragment key={value}>
          <CheckboxGroupFieldSkeleton.Option
            value={value}
            name="checkbox-group"
            onChange={onChange}
          />
          <CheckboxGroupFieldSkeleton.OptionLabel optionValue={value}>
            {label}
          </CheckboxGroupFieldSkeleton.OptionLabel>
        </React.Fragment>
      ))}
      <CheckboxGroupFieldSkeleton.Error>
        {error}
      </CheckboxGroupFieldSkeleton.Error>
      <CheckboxGroupFieldSkeleton.Hint>
        Lodge of Sorceresses is a secret society of female magic users in The
        Witcher saga
      </CheckboxGroupFieldSkeleton.Hint>
    </CheckboxGroupFieldSkeleton>
  )
}
```

## Components

### InputFieldSkeleton

`InputFieldSkeleton` is a compound component that can be used when you need to render an `<input />` form control.

`InputFieldSkeleton.Control` accepts all of the props supported by `<input />` except for `id` and `aria-invalid` (those are taken care of by `InputFieldSkeleton` itself). You also pass a `ref` to it like you would with a normal `<input />` element.

### TextAreaFieldSkeleton

`TextAreaFieldSkeleton` is a compound component that can be used when you need to render an `<textarea />` form control.

`TextAreaFieldSkeleton.Control` accepts all of the props supported by `<textarea />` except for `id` and `aria-invalid` (those are taken care of by `TextAreaFieldSkeleton` itself). You also pass a `ref` to it like you would with a normal `<textarea />` element.

### SelectFieldSkeleton

`SelectFieldSkeleton` is a compound component that can be used when you need to render an `<select />` form control.

`SelectFieldSkeleton.Control` accepts all of the props supported by `<select />` except for `id` and `aria-invalid` (those are taken care of by `SelectFieldSkeleton` itself), as well as `options`:

```jsx
return (
  <SelectFieldSkeleton.Control
    options={[
      { value: "en", label: "English" },
      { value: "pl", label: "Polski" },
      { value: "ru", label: "Русский" },
    ]}
  />
)
```

You also pass a `ref` to it like you would with a normal `<select />` element.

### SingleCheckboxFieldSkeleton

`SingleCheckboxFieldSkeleton` is a compound component that can be used when you need to render a single `<input type="checkbox" />` with a label. A very common example is a field asking the user if they agree with terms and conditions.

`SingleCheckboxFieldSkeleton.Control` accepts all of the props supported by `<input />` except for `type`, `id` and `aria-invalid` (those are taken care of by `SingleCheckboxFieldSkeleton` itself). You also pass a `ref` to it like you would with a normal `<input />` element.

### CheckboxGroupFieldSkeleton

`CheckboxGroupFieldSkeleton` is a compound component that can be used when you need to render multiple checkbox options. It will wrap the options inside `<fieldset />` element, and `CheckboxGroupFieldSkeleton.Label` will render a `<legend />` element. You can provide custom styles for those by passing `style` and/or `className` props to the corresponding components.

To render an option, you would need to use two components:

- `CheckboxGroupFieldSkeleton.Option` &mdash; a wrapper for `<input type="checkbox" />`; it accepts all of the props supported by `<input />` except for `id` and `aria-invalid` (those are taken care of by `CheckboxGroupFieldSkeleton` itself). You will also **have to** provide `value` and `name` props.
- `CheckboxGroupFieldSkeleton.OptionLabel` &mdash; a wrapper for `<label />` to be associated with the option; accepts all of the props supported by `<label />` except for `htmlFor`. You will also **have to** provide `optionValue` prop so that the `CheckboxGroupFieldSkeleton` can associate the label to its option.

### RadioButtonFieldSkeleton

`RadioButtonFieldSkeleton` is a compound component that can be used when you need to render a radio button. It is configured in exactly the same way as [CheckboxGroupFieldSkeleton](#checkboxgroupfieldskeleton)

### FormFieldSkeleton

All other `*FieldSkeleton` components are built using `FormFieldSkeleton`; this component provides default functionality for labels, hints and error messages. You should only use `FormFieldSkeleton` if you want to build your own form control.
