/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { ReactNode } from "react"

import TextAreaField, { TextAreaFieldControlProps } from "./TextAreaField"
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

const TextAreaFieldBlock = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldBlockProps
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
    <TextAreaField id={id} hasError={!!error} hasHint={!!hint}>
      <TextAreaField.Wrapper className={className}>
        <TextAreaField.Label size={labelSize} isRequired={!!rest.required}>
          {label}
        </TextAreaField.Label>
        <TextAreaField.Control ref={ref} {...rest} />
        <TextAreaField.Hint>{hint}</TextAreaField.Hint>
        <TextAreaField.Error validationMode={validationMode}>
          {error}
        </TextAreaField.Error>
      </TextAreaField.Wrapper>
    </TextAreaField>
  )
})

export default TextAreaFieldBlock
