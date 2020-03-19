## TextAreaField

`TextAreaField` is a styled version of `TextAreaFieldSkeleton`

```
<TextAreaField id="ID" hasError={!!error} hasHint={!!hint}>
  <TextAreaFieldWrapper>
    <TextAreaFieldLabel>Last name</TextAreaFieldLabel>
    <TextAreaFieldControl
      onChange={e => {}}
    />
    <TextAreaFieldError>{error}</TextAreaFieldError>
    <TextAreaFieldHint>{hint}</TextAreaFieldHint>
  </TextAreaFieldWrapper>
</TextAreaField>
```

The only differences are:

- `TextAreaField` has an additional subcomponent `TextAreaFieldWrapper` which role is to provide a way to style the field row as a block.
- `TextAreaFieldLabel` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<label>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `TextAreaFieldControl` component.

## TextAreaFieldBlock

`TextAreaFieldBlock` is a component which role is to provide a 'shortcut' usage of `TextAreaField`, instead of explicitly passing subcomponents as children of the root component we pass all data and callbacks as props to the parent component.

```
 <TextAreaFieldBlock
  id="ID"
  label="First name"
  onChange={e => {}}
  error={error}
  hint={hint}
/>
```

#### TextAreaFieldBlock props

`TextAreaFieldBLock` accepts all props `TextAreaField` and its subcomponents accept altogether, besides three distinctions:

- `label: ReactNode`
- `labelSize?: [L, M, S]` - default value `M`
- `error?: ReactNode` - instead of `hasError`
- `hint?: ReactNode` - instead of `hasHint`

## TextAreaConnectedField

`TextAreaConnectedField` is a component built on `TextAreaFieldBlock` and dedicated to use with `Formik`. The component uses Formik `useFormikContext` method to pull the necessary `state` and `callbacks` from Formik `context`. Besides that it autogenerates the `id` and `label` props based on the `name` prop if they are not set.

```
 <TextAreaConnectedField
  name="title"
/>
```

#### TextAreaConnectedField props

`TextAreaConnectedField` accepts the same props as `TextAreaFieldBlock` besides two distinctions:

- `name: string` (name is required)
- `label?: ReactNode` (label is optional)
