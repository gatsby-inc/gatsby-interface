/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { ReactNode } from "react"

import CheckboxField, { CheckboxFieldControlProps } from "./CheckboxField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type CheckboxFieldBlockProps = {
  id: string
  label: ReactNode
  labelSize?: FormFieldLabelSize
  error?: ReactNode
  hint?: ReactNode
  validationMode?: ErrorValidationMode
} & CheckboxFieldControlProps

const CheckboxFieldBlock = React.forwardRef<
  HTMLInputElement,
  CheckboxFieldBlockProps
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
    <CheckboxField id={id} hasError={!!error} hasHint={!!hint}>
      <CheckboxField.Wrapper className={className}>
        <CheckboxField.Control ref={ref} {...rest} />
        <CheckboxField.Label size={labelSize} isRequired={!!rest.required}>
          {label}
        </CheckboxField.Label>
        <CheckboxField.Hint>{hint}</CheckboxField.Hint>
        <CheckboxField.Error validationMode={validationMode}>
          {error}
        </CheckboxField.Error>
      </CheckboxField.Wrapper>
    </CheckboxField>
  )
})

export default CheckboxFieldBlock
