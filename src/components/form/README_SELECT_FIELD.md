## SelectField

`SelectField` is a styled version of `SelectFieldSkeleton`

```
const options = [
  {
    label: `option 1`,
    value: `option1`
  },
  {
    label: `option 1`,
    value: `option1`
  }
]


<SelectField id="ID" hasError={!!error} hasHint={!!hint}>
  <SelectFieldWrapper>
    <SelectFieldLabel>Comment</SelectFieldLabel>
    <SelectFieldControl
      options={options}
      onChange={e => action(`Change`)(e.target.value)}
    />
    <SelectFieldHint>{hint}</SelectFieldHint>
    <SelectFieldError>{error}</SelectFieldError>
  </SelectFieldWrapper>
</SelectField>
```

The only difference are:

- `SelectField` has an additional subcomponent `SelectFieldWrapper` which role is to provide a way to style the field row as a block.
- `SelectFieldLabel` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<label>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `SelectFieldControl` component.

## SelectFieldBlock

`SelectFieldBlock` is a component which role is to provide a 'shortcut' usage of `SelectField`, instead of explicitly passing subcomponents as children of the root component we pass all data and callbacks as props to the parent component.

```
const options = [
  {
    label: `option 1`,
    value: `option1`
  },
  {
    label: `option 1`,
    value: `option1`
  }
]

 <SelectFieldBlock
  id="ID"
  label="First name"
  options={options}
  onChange={e => {}}
  error={error}
  hint={hint}
/>
```

#### SelectFieldBlock props

`SelectFieldBLock` accepts all props `SelectField` and its subcomponents accept altogether, besides three distinctions:

- `label: ReactNode`
- `labelSize?: [L, M, S]` - default value `M`
- `error?: ReactNode` - instead of `hasError`
- `hint?: ReactNode` - instead of `hasHint`

## SelectConnectedField

`SelectConnectedField` is a component built on `SelectFieldBlock` and dedicated to use with `Formik`. The component uses Formik `useFormikContext` method to pull the necessary `state` and `callbacks` from Formik `context`. Besides that it autogenerates the `id` and `label` props based on the `name` prop if they are not set.

```
 <TextAreaConnectedField
  name="title"
/>
```

#### SelectConnectedField props

`SelectConnectedField` accepts the same props as `SelectFieldBlock` besides two distinctions:

- `name: string` (name is required)
- `label?: ReactNode` (label is optional)
