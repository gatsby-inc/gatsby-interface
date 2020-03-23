/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  CheckboxGroupField,
  CheckboxGroupFieldLabel,
  CheckboxGroupFieldOptions,
  CheckboxGroupFieldOptionWrapper,
  CheckboxGroupFieldOption,
  CheckboxGroupFieldOptionProps,
  CheckboxGroupFieldOptionLabel,
  CheckboxGroupFieldHint,
  CheckboxGroupFieldError,
} from "./CheckboxGroupField"
import { WithFormFieldBlock } from "./FormField"

export type CheckboxGroupFieldBlockProps = WithFormFieldBlock<
  {
    options: { label: string; value: any }[]
    layout?: `horizontal` | `vertical`
    value: any[]
  } & Omit<CheckboxGroupFieldOptionProps, "value">
>

export const CheckboxGroupFieldBlock = (
  props: CheckboxGroupFieldBlockProps
) => {
  const {
    id,
    label,
    layout,
    labelSize,
    options,
    error,
    hint,
    className,
    validationMode,
    value: fieldValue,
    ...rest
  } = props

  return (
    <CheckboxGroupField
      id={id}
      hasError={!!error}
      hasHint={!!hint}
      layout={layout}
      className={className}
    >
      <CheckboxGroupFieldLabel size={labelSize} isRequired={!!rest.required}>
        {label}
      </CheckboxGroupFieldLabel>
      <CheckboxGroupFieldOptions>
        {options.map(({ label, value }) => (
          <CheckboxGroupFieldOptionWrapper key={value}>
            <CheckboxGroupFieldOption
              value={value}
              checked={fieldValue.includes(value)}
              {...rest}
            />
            <CheckboxGroupFieldOptionLabel optionValue={value}>
              {label}
            </CheckboxGroupFieldOptionLabel>
          </CheckboxGroupFieldOptionWrapper>
        ))}
      </CheckboxGroupFieldOptions>
      <CheckboxGroupFieldHint>{hint}</CheckboxGroupFieldHint>
      <CheckboxGroupFieldError validationMode={validationMode}>
        {error}
      </CheckboxGroupFieldError>
    </CheckboxGroupField>
  )
}
