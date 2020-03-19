/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  InputField,
  InputFieldControlProps,
  InputFieldWrapper,
  InputFieldLabel,
  InputFieldControl,
  InputFieldHint,
  InputFieldError,
} from "./InputField"
import { WithFormFieldBlock } from "./FormField"

export type InputFieldBlockProps = WithFormFieldBlock<InputFieldControlProps>

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
