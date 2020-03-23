/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  TextAreaField,
  TextAreaFieldControlProps,
  TextAreaFieldWrapper,
  TextAreaFieldLabel,
  TextAreaFieldControl,
  TextAreaFieldHint,
  TextAreaFieldError,
} from "./TextAreaField"
import { WithFormFieldBlock } from "./FormField"

export type TextAreaFieldBlockProps = WithFormFieldBlock<
  TextAreaFieldControlProps
>

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
