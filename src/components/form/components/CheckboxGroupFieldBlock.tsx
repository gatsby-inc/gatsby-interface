/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  CheckboxGroupField,
  CheckboxGroupFieldLabel,
  CheckboxGroupFieldOptions,
  CheckboxGroupFieldOptionWrapper,
  CheckboxGroupFieldOption,
  CheckboxGroupFieldOptionLabel,
  CheckboxGroupFieldHint,
  CheckboxGroupFieldError,
} from "./CheckboxGroupField"
import { FormGroupFieldOptionProps } from "./FormGroupField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type CheckboxGroupFieldBlockProps = {
  id: string
  label: React.ReactNode
  labelSize?: FormFieldLabelSize
  options: { label: string; value: any }[]
  layout?: `horizontal` | `vertical`
  error?: React.ReactNode
  hint?: React.ReactNode
  validationMode?: ErrorValidationMode
  value: any[]
} & Omit<FormGroupFieldOptionProps, "value">

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
