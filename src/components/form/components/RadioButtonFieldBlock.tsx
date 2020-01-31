/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import RadioButtonField from "./RadioButtonField"
import { FormGroupFieldOptionProps } from "./FormGroupField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type RadioButtonFieldBlockProps = {
  id: string
  label: React.ReactNode
  labelSize?: FormFieldLabelSize
  options: { label: string; value: any }[]
  error?: React.ReactNode
  hint?: React.ReactNode
  validationMode?: ErrorValidationMode
} & FormGroupFieldOptionProps

const RadioButtonFieldBlock = (props: RadioButtonFieldBlockProps) => {
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
      <RadioButtonField.Label size={labelSize} isRequired={!!rest.required}>
        {label}
      </RadioButtonField.Label>
      <RadioButtonField.Options>
        {options.map(({ label, value }) => (
          <RadioButtonField.OptionWrapper key={value}>
            <RadioButtonField.Option
              value={value}
              checked={value === fieldValue}
              {...rest}
            />
            <RadioButtonField.OptionLabel optionValue={value}>
              {label}
            </RadioButtonField.OptionLabel>
          </RadioButtonField.OptionWrapper>
        ))}
      </RadioButtonField.Options>
      <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
      <RadioButtonField.Error validationMode={validationMode}>
        {error}
      </RadioButtonField.Error>
    </RadioButtonField>
  )
}

export default RadioButtonFieldBlock
