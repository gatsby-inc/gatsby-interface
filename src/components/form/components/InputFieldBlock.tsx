/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { ReactNode } from "react"

import {
  InputField,
  InputFieldControlProps,
  InputFieldWrapper,
  InputFieldLabel,
  InputFieldControl,
  InputFieldHint,
  InputFieldError,
} from "./InputField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type InputFieldBlockProps = {
  id: string
  label: ReactNode
  labelSize?: FormFieldLabelSize
  error?: ReactNode
  hint?: ReactNode
  validationMode?: ErrorValidationMode
} & InputFieldControlProps

export const InputFieldBlock = React.forwardRef<
  HTMLInputElement,
  InputFieldBlockProps
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
    <InputField id={id} hasError={!!error} hasHint={!!hint}>
      <InputFieldWrapper className={className}>
        <InputFieldLabel size={labelSize} isRequired={!!rest.required}>
          {label}
        </InputFieldLabel>
        <InputFieldControl ref={ref} {...rest} />
        <InputFieldHint>{hint}</InputFieldHint>
        <InputFieldError validationMode={validationMode}>
          {error}
        </InputFieldError>
      </InputFieldWrapper>
    </InputField>
  )
})
