/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { ReactNode } from "react"

import {
  TextAreaField,
  TextAreaFieldControlProps,
  TextAreaFieldWrapper,
  TextAreaFieldLabel,
  TextAreaFieldControl,
  TextAreaFieldHint,
  TextAreaFieldError,
} from "./TextAreaField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type TextAreaFieldBlockProps = {
  id: string
  label: ReactNode
  labelSize?: FormFieldLabelSize
  error?: ReactNode
  hint?: ReactNode
  validationMode?: ErrorValidationMode
} & TextAreaFieldControlProps

export const TextAreaFieldBlock = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldBlockProps
>(function TextAreaFieldBlock(props, ref) {
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
    <TextAreaField id={id} hasError={!!error} hasHint={!!hint}>
      <TextAreaFieldWrapper className={className}>
        <TextAreaFieldLabel size={labelSize} isRequired={!!rest.required}>
          {label}
        </TextAreaFieldLabel>
        <TextAreaFieldControl ref={ref} {...rest} />
        <TextAreaFieldHint>{hint}</TextAreaFieldHint>
        <TextAreaFieldError validationMode={validationMode}>
          {error}
        </TextAreaFieldError>
      </TextAreaFieldWrapper>
    </TextAreaField>
  )
})
