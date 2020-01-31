## CheckboxField

`CheckboxField` is a styled version of `CheckboxFieldSkeleton`

```
<CheckboxField id="ID" hasError={!!error} hasHint={!!hint}>
  <CheckboxField.Wrapper>
    <CheckboxField.Control
      onChange={e => {}}
    />
    <CheckboxField.Label>Last name</CheckboxField.Label>
    <CheckboxField.Error>{error}</CheckboxField.Error>
    <CheckboxField.Hint>{hint}</CheckboxField.Hint>
  </CheckboxField.Wrapper>
</CheckboxField>
```

**IMPORTANT!** `CheckboxField.Label` must always be placed below `CheckboxField.Control`

The only difference are:

- `CheckboxField` has an additional subcomponent `CheckboxField.Wrapper` which role is to provide a way to style the field row as a block.
- `CheckboxField.Label` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<label>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `CheckboxField.Control` component.

## CheckboxFieldBlock

`CheckboxFieldBlock` is a component which role is to provide a 'shortcut' usage of `CheckboxField`, instead of explicitly passing subcomponents as children of the root component we pass all data and callbacks as props to the parent component.

```
 <CheckboxFieldBlock
  id="ID"
  label="First name"
  onChange={e => {}}
  error={error}
  hint={hint}
/>
```

#### CheckboxFieldBlock props

`CheckboxFieldBLock` accepts all props `CheckboxField` and its subcomponents accept altogether, besides three distinctions:

- `label: ReactNode`
- `error?: ReactNode` - instead of `hasError`
- `hint?: ReactNode` - instead of `hasHint`
- `labelSize?: ['L', 'M', 'S']` - default value `L`

## CheckboxConnectedField

`CheckboxConnectedField` is a component built on `CheckboxFieldBlock` and dedicated to use with `Formik`. The component uses Formik `useFormikContext` method to pull the necessary `state` and `callbacks` from Formik `context`. Besides that it autogenerates the `id` and `label` props based on the `name` prop if they are not set.

```
 <CheckboxConnectedField
  name="title"
/>
```

#### CheckboxConnectedField props

`CheckboxConnectedField` accepts the same props as `CheckboxFieldBlock` besides two distinctions:

- `name: string` (name is required)
- `label?: ReactNode` (label is optional)
