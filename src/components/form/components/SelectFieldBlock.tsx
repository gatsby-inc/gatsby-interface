/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { ReactNode } from "react"

import SelectField, { SelectFieldControlProps } from "./SelectField"
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

const SelectFieldBlock = React.forwardRef<
  HTMLSelectElement,
  SelectFieldBlockProps
>((props, ref) => {
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
      <SelectField.Wrapper className={className}>
        <SelectField.Label size={labelSize} isRequired={!!rest.required}>
          {label}
        </SelectField.Label>
        <SelectField.Control ref={ref} {...rest} />
        <SelectField.Hint>{hint}</SelectField.Hint>
        <SelectField.Error validationMode={validationMode}>
          {error}
        </SelectField.Error>
      </SelectField.Wrapper>
    </SelectField>
  )
})

export default SelectFieldBlock
