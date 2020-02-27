/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { ReactNode } from "react"

import {
  SelectField,
  SelectFieldControlProps,
  SelectFieldWrapper,
  SelectFieldLabel,
  SelectFieldControl,
  SelectFieldHint,
  SelectFieldError,
} from "./SelectField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type SelectFieldBlockProps = {
  id: string
  label: ReactNode
  labelSize?: FormFieldLabelSize
  error?: ReactNode
  hint?: ReactNode
  validationMode?: ErrorValidationMode
} & SelectFieldControlProps

export const SelectFieldBlock = React.forwardRef<
  HTMLSelectElement,
  SelectFieldBlockProps
>(function SelectFieldBlock(props, ref) {
  const {
    id,
    label,
    labelSize,
    error,
    hint,
    className,
    validationMode,
    ...rest
  } = props

  return (
    <SelectField id={id} hasError={!!error} hasHint={!!hint}>
      <SelectFieldWrapper className={className}>
        <SelectFieldLabel size={labelSize} isRequired={!!rest.required}>
          {label}
        </SelectFieldLabel>
        <SelectFieldControl ref={ref} {...rest} />
        <SelectFieldHint>{hint}</SelectFieldHint>
        <SelectFieldError validationMode={validationMode}>
          {error}
        </SelectFieldError>
      </SelectFieldWrapper>
    </SelectField>
  )
})
