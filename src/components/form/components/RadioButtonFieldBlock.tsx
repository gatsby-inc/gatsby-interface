/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  RadioButtonField,
  RadioButtonFieldLabel,
  RadioButtonFieldOptions,
  RadioButtonFieldHint,
  RadioButtonFieldError,
  RadioButtonFieldOptionItem,
  RadioButtonFieldOptionItemProps,
  RadioButtonFieldVariant,
} from "./RadioButtonField"
import { WithFormFieldBlock, useFormFieldContainerProps } from "./FormField"
import { FormGroupOptionsDirection } from "./FormGroupField"

export type RadioButtonFieldBlockOption = {
  label: React.ReactNode
  value: string
} & Partial<Omit<RadioButtonFieldOptionItemProps, "label" | "value">>

export type RadioButtonFieldBlockProps = WithFormFieldBlock<
  {
    options: RadioButtonFieldBlockOption[]
    value?: string
    optionsDirection?: FormGroupOptionsDirection
    variant?: RadioButtonFieldVariant
  } & Omit<RadioButtonFieldOptionItemProps, "value">
>

export const RadioButtonFieldBlock = (props: RadioButtonFieldBlockProps) => {
  const {
    id,
    label,
    labelSize,
    error,
    hint,
    className,
    validationMode,
    value: fieldValue,
    options,
    layout,
    optionsDirection,
    variant,
    ...rest
  } = props

  const layoutProps = useFormFieldContainerProps(layout)

  return (
    <RadioButtonField
      id={id}
      hasError={!!error}
      hasHint={!!hint}
      optionsDirection={optionsDirection}
      className={className}
      {...layoutProps}
    >
      <RadioButtonFieldLabel
        size={labelSize}
        isRequired={!!rest.required}
        css={_theme => [layout === `horizontal` && { alignSelf: `baseline` }]}
      >
        {label}
      </RadioButtonFieldLabel>
      <RadioButtonFieldOptions
        css={_theme => [layout === `horizontal` && { paddingTop: 0 }]}
      >
        {options.map(({ value, label, ...restOption }) => (
          <RadioButtonFieldOptionItem
            key={value}
            value={value}
            checked={
              fieldValue === undefined ? undefined : value === fieldValue
            }
            label={label}
            variant={variant}
            {...rest}
            {...restOption}
          />
        ))}
      </RadioButtonFieldOptions>
      <RadioButtonFieldHint>{hint}</RadioButtonFieldHint>
      <RadioButtonFieldError validationMode={validationMode}>
        {error}
      </RadioButtonFieldError>
    </RadioButtonField>
  )
}
