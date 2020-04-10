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
import { RadioButtonFieldSkeletonOptionProps } from "../../form-skeletons"

export type RadioButtonFieldBlockOption = {
  label: React.ReactNode
  value: string
} & Partial<Omit<RadioButtonFieldSkeletonOptionProps, "label" | "value">>

export type RadioButtonFieldBlockProps = WithFormFieldBlock<
  {
    options: RadioButtonFieldBlockOption[]
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
        {options.map(({ value, label, ...restOption }) => (
          <RadioButtonFieldOptionItem
            key={value}
            value={value}
            checked={value === fieldValue}
            label={label}
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
