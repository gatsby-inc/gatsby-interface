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
} from "./RadioButtonField"
import { WithFormFieldBlock } from "./FormField"

export type RadioButtonFieldBlockProps = WithFormFieldBlock<
  {
    options: { label: string; value: any }[]
  } & RadioButtonFieldOptionItemProps
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
    children,
    ...rest
  } = props

  return (
    <RadioButtonField
      id={id}
      hasError={!!error}
      hasHint={!!hint}
      className={className}
    >
      <RadioButtonFieldLabel size={labelSize} isRequired={!!rest.required}>
        {label}
      </RadioButtonFieldLabel>
      <RadioButtonFieldOptions>
        {children ||
          options.map(({ label, value }) => (
            <RadioButtonFieldOptionItem
              key={value}
              value={value}
              checked={value === fieldValue}
              label={label}
              {...rest}
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
