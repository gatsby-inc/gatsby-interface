/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  CheckboxGroupField,
  CheckboxGroupFieldLabel,
  CheckboxGroupFieldOptions,
  CheckboxGroupFieldOptionProps,
  CheckboxGroupFieldHint,
  CheckboxGroupFieldError,
  CheckboxGroupFieldOptionItemProps,
  CheckboxGroupFieldOptionItem,
} from "./CheckboxGroupField"
import { WithFormFieldBlock, useFormFieldContainerProps } from "./FormField"

export type CheckboxGroupFieldBlockOption = {
  label: React.ReactNode
  value: string
} & Partial<Omit<CheckboxGroupFieldOptionItemProps, "label" | "value">>

export type CheckboxGroupFieldBlockProps = WithFormFieldBlock<
  {
    options: CheckboxGroupFieldBlockOption[]
    optionsDirection?: `horizontal` | `vertical`
    value: string[]
  } & Omit<CheckboxGroupFieldOptionProps, "value">
>

export const CheckboxGroupFieldBlock = (
  props: CheckboxGroupFieldBlockProps
) => {
  const {
    id,
    label,
    layout,
    optionsDirection,
    labelSize,
    options,
    error,
    hint,
    className,
    validationMode,
    value: fieldValue,
    ...rest
  } = props

  const layoutProps = useFormFieldContainerProps(layout)

  return (
    <CheckboxGroupField
      id={id}
      hasError={!!error}
      hasHint={!!hint}
      optionsDirection={optionsDirection}
      className={className}
      {...layoutProps}
    >
      <CheckboxGroupFieldLabel
        size={labelSize}
        isRequired={!!rest.required}
        css={_theme => [layout === `horizontal` && { alignSelf: `baseline` }]}
      >
        {label}
      </CheckboxGroupFieldLabel>
      <CheckboxGroupFieldOptions
        css={_theme => [layout === `horizontal` && { paddingTop: 0 }]}
      >
        {options.map(({ value, label, ...restOption }) => (
          <CheckboxGroupFieldOptionItem
            key={value}
            value={value}
            checked={fieldValue.includes(value)}
            label={label}
            {...rest}
            {...restOption}
          />
        ))}
      </CheckboxGroupFieldOptions>
      <CheckboxGroupFieldHint>{hint}</CheckboxGroupFieldHint>
      <CheckboxGroupFieldError validationMode={validationMode}>
        {error}
      </CheckboxGroupFieldError>
    </CheckboxGroupField>
  )
}
