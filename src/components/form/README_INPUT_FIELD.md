## InputField

`InputField` is a styled version of `InputFieldSkeleton`

```
<InputField id="ID" hasError={!!error} hasHint={!!hint}>
  <InputField.Wrapper>
    <InputField.Label>Last name</InputField.Label>
    <InputField.Control
      onChange={e => {}}
    />
    <InputField.Error>{error}</InputField.Error>
    <InputField.Hint>{hint}</InputField.Hint>
  </InputField.Wrapper>
</InputField>
```

The only difference are:

- `InputField` has an additional subcomponent `InputField.Wrapper` which role is to provide a way to style the field row as a block.
- `InputField.Label` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<label>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `InputField.Control` component.

## InputFieldBlock

`InputFieldBlock` is a component which role is to provide a 'shortcut' usage of `InputField`, instead of explicitly passing subcomponents as children of the root component we pass all data and callbacks as props to the parent component.

```
 <InputFieldBlock
  id="ID"
  label="First name"
  onChange={e => {}}
  error={error}
  hint={hint}
/>
```

#### InputFieldBlock props

`InputFieldBLock` accepts all props `InputField` and its subcomponents accept altogether, besides three distinctions:

- `label: ReactNode`
- `labelSize?: [L, M, S]`
- `error?: ReactNode` - instead of `hasError`
- `hint?: ReactNode` - instead of `hasHint`

## InputConnectedField

`InputConnectedField` is a component built on `InputFieldBlock` and dedicated to use with `Formik`. The component uses Formik `useFormikContext` method to pull the necessary `state` and `callbacks` from Formik `context`. Besides that it autogenerates the `id` and `label` props based on the `name` prop if they are not set.

```
 <InputConnectedField
  name="title"
/>
```

#### InputConnectedField props

`InputConnectedField` accepts the same props as `InputFieldBlock` besides two distinctions:

- `name: string` (name is required)
- `label?: ReactNode` (label is optional)
