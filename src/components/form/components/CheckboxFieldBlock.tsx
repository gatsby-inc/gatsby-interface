/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { ReactNode } from "react"

import {
  CheckboxField,
  CheckboxFieldControlProps,
  CheckboxFieldWrapper,
  CheckboxFieldControl,
  CheckboxFieldLabel,
  CheckboxFieldHint,
  CheckboxFieldError,
} from "./CheckboxField"
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

export const CheckboxFieldBlock = React.forwardRef<
  HTMLInputElement,
  CheckboxFieldBlockProps
>(function CheckboxFieldBlock(props, ref) {
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
      <CheckboxFieldWrapper className={className}>
        <CheckboxFieldControl ref={ref} {...rest} />
        <CheckboxFieldLabel size={labelSize} isRequired={!!rest.required}>
          {label}
        </CheckboxFieldLabel>
        <CheckboxFieldHint>{hint}</CheckboxFieldHint>
        <CheckboxFieldError validationMode={validationMode}>
          {error}
        </CheckboxFieldError>
      </CheckboxFieldWrapper>
    </CheckboxField>
  )
})
