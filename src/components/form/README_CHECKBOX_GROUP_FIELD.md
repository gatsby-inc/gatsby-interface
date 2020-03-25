## CheckboxGroupField

`CheckboxGroupField` is a styled version of `CheckboxGroupFieldSkeleton`

```
 <CheckboxGroupField id="ID" hasError={!!error} hasHint={!!hint}>
  <CheckboxGroupFieldLabel >
    Fieldset Legend
  </CheckboxGroupFieldLabel>
  <CheckboxGroupFieldOptions>
    {options.map(({ label, value }) => (
      <CheckboxGroupFieldOptionWrapper key={value}>
        <CheckboxGroupFieldOption value={value} name="field_name" />
        <CheckboxGroupFieldOptionLabel
          optionValue={value}
        >
          {label}
        </CheckboxGroupFieldOptionLabel>
      </CheckboxGroupFieldOptionWrapper>
    ))}
  </CheckboxGroupFieldOptions>
  <CheckboxGroupFieldHint>{hint}</CheckboxGroupFieldHint>
  <CheckboxGroupFieldError>{error}</CheckboxGroupFieldError>
</CheckboxGroupField>
```

**IMPORTANT!** `CheckboxGroupFieldOptionLabel` in the `map` callback must always be placed below `CheckboxGroupFieldOption`.

The **differences** between `CheckboxGroupField` and `CheckboxGroupFieldSkeleton`:

- `CheckboxGroupField` accepts additional prop:
  - `layout?: ['vertical', 'horizontal']`, `vertical` is a default value
- `CheckboxGroupField` has additional subcomponent:
  - `CheckboxGroupFieldOptions` which role is to provide a way to style the list of option inputs as a block.
- `CheckboxGroupFieldLabel` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<legend>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `CheckboxGroupFieldControl` component if you want to rely on the web form native validation.
- `CheckboxGroupFieldOptionLabel` accepts additional prop
  - `size?: ['S','M','L']` - default value `L`

## CheckboxGroupFieldBlock

`CheckboxGroupFieldBlock` is a component which role is to provide a 'shortcut' usage of `CheckboxGroupField`, instead of explicitly passing subcomponents as children of the root component we pass all data and callbacks as props to the parent component.

```
 <CheckboxGroupFieldBlock
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

#### CheckboxGroupFieldBlock props

`CheckboxGroupFieldBlock` accepts all props `CheckboxField` and its subcomponents accept altogether, besides the following distinctions:

- `label: ReactNode`
- `value: any[]`
- `name: string`
- `error?: ReactNode` - instead of `hasError`
- `hint?: ReactNode` - instead of `hasHint`

## CheckboxGroupConnectedField

`CheckboxGroupConnectedField` is a component built on `CheckboxGroupFieldBlock` and dedicated to use with `Formik`. The component uses Formik `useFormikContext` method to pull the necessary `state` and `callbacks` from Formik `context`. Besides that it autogenerates the `id` and `label` props based on the `name` prop if they are not set.

```
<CheckboxGroupConnectedField
  name="tags"
  options={tags}
/>
```

#### CheckboxGroupConnectedField props

`InputConnectedField` accepts the same props as `CheckboxGroupFieldBlock` besides two distinctions:

- `label?: ReactNode` (label is optional)
- `value?: any[]` (value is optional)
