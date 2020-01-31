## RadioButtonField

`RadioButtonField` is a styled version of `RadioButtonFieldSkeleton`

```
 <RadioButtonField id="ID" hasError={!!error} hasHint={!!hint}>
  <RadioButtonField.Label >
    Fieldset Legend
  </RadioButtonField.Label>
  <RadioButtonField.Options>
    {options.map(({ label, value }) => (
      <RadioButtonField.OptionWrapper key={value}>
        <RadioButtonField.Option value={value} name="field_name" />
        <RadioButtonField.OptionLabel
          optionValue={value}
        >
          {label}
        </RadioButtonField.OptionLabel>
      </RadioButtonField.OptionWrapper>
    ))}
  </RadioButtonField.Options>
  <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
  <RadioButtonField.Error>{error}</RadioButtonField.Error>
</RadioButtonField>
```

**IMPORTANT!** `RadioButtonField.OptionLabel` in the `map` callback must always be placed below `RadioButtonField.Option`.

The **differences** between `RadioButtonField` and `RadioButtonFieldSkeleton`:

- `RadioButtonField` accepts additional props:
  - `layout?: ['vertical', 'horizontal']`
  - `variant?: ['standard', 'framed'`
- `RadioButtonField` has additional subcomponents:
  - `RadioButtonField.Options` which role is to provide a way to style the list of option inputs as a block.
  - `RadioButtonField.OptionFrame` which provide a styled frame for cases when we need to conditionaly render a sub form under the selected option framed together as a block
- `RadioButtonField.Label` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<legend>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `RadioButtonField.Control` component.
- `RadioButtonField.OptionLabel` accepts additional prop
  - `size?: ['S','M','L']` - default value `L`

#### Long lists of options

For long lists of options in `vertical` layout for better UX you can consider placing `RadioButtonField.Hint` and `RadioButtonField.Error` just under the `RadioButtonField.Label` and above the `RadioButtonField.Options`

## RadioButtonFieldBlock

`RadioButtonFieldBlock` is a component which role is to provide a 'shortcut' usage of `RadioButtonField`, instead of explicitly passing subcomponents as children of the root component we pass all data and callbacks as props to the parent component.

```
 <RadioButtonFieldBlock
    id="ID"
    label="Fieldset Legend"
    options={options}
    onChange={e => {...}}
    onBlur={() => {...}}
    error={error}
    hint={hint}
    required
  />
```

#### RadioButtonFieldBlock props

`RadioButtonFieldBlock` accepts all props `RadioButtonField` and its subcomponents accept altogether, besides the following distinctions:

- `label: ReactNode`
- `value: string`
- `name: string`
- `error?: ReactNode` - instead of `hasError`
- `hint?: ReactNode` - instead of `hasHint`

## RadioButtonConnectedField

`RadioButtonConnectedField` is a component built on `RadioButtonFieldBlock` and dedicated to use with `Formik`. The component uses Formik `useFormikContext` method to pull the necessary `state` and `callbacks` from Formik `context`. Besides that it autogenerates the `id` and `label` props based on the `name` prop if they are not set.

```
<RadioButtonConnectedField
  name="category"
  options={categories}
/>
```

#### RadioButtonConnectedField props

`InputConnectedField` accepts the same props as `RadioButtonFieldBlock` besides two distinctions:

- `label?: ReactNode` (label is optional)
- `value?: string` (value is optional)
