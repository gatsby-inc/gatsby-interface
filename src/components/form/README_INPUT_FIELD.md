## InputField

`InputField` is a styled version of `InputFieldSkeleton`

```
<InputField id="ID" hasError={!!error} hasHint={!!hint}>
  <InputFieldWrapper>
    <InputFieldLabel>Last name</InputFieldLabel>
    <InputFieldControl
      onChange={e => {}}
    />
    <InputFieldError>{error}</InputFieldError>
    <InputFieldHint>{hint}</InputFieldHint>
  </InputFieldWrapper>
</InputField>
```

The only difference are:

- `InputField` has an additional subcomponent `InputFieldWrapper` which role is to provide a way to style the field row as a block.
- `InputFieldLabel` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<label>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `InputFieldControl` component.

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
