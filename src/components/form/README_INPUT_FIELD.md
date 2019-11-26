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

## InputFieldBlock

`InputFieldBlock` is a 'shortcut' usage of `InputField`, instead of explicitly pass subcomponents as children of the parent component we pass all data and callbacks as props to the parent component.

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

- `error: string` - instead of `hasError`
- `hint: string` - instead of `hasHint`
- `labelSize: FormFieldLabelSize` - instead of `label` on `InputField.Label`
