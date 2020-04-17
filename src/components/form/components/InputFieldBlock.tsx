/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  InputField,
  InputFieldControlProps,
  InputFieldLabel,
  InputFieldControl,
  InputFieldHint,
  InputFieldError,
} from "./InputField"
import { WithFormFieldBlock, FormFieldContainer } from "./FormField"

export type InputFieldBlockProps = WithFormFieldBlock<InputFieldControlProps>

export const InputFieldBlock = React.forwardRef<
  HTMLInputElement,
  InputFieldBlockProps
>(function InputFieldBlock(props, ref) {
  const {
    id,
    label,
    labelSize,
    error,
    hint,
    className,
    validationMode,
    layout,
    ...rest
  } = props

  return (
    <FormFieldContainer layout={layout} className={className}>
      <InputField id={id} hasError={!!error} hasHint={!!hint}>
        <InputFieldLabel size={labelSize} isRequired={!!rest.required}>
          {label}
        </InputFieldLabel>
        <InputFieldControl ref={ref} {...rest} />
        <InputFieldHint>{hint}</InputFieldHint>
        <InputFieldError validationMode={validationMode}>
          {error}
        </InputFieldError>
      </InputField>
    </FormFieldContainer>
  )
})
