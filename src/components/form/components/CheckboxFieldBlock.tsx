/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  CheckboxField,
  CheckboxFieldControlProps,
  CheckboxFieldWrapper,
  CheckboxFieldControl,
  CheckboxFieldLabel,
  CheckboxFieldHint,
  CheckboxFieldError,
} from "./CheckboxField"
import { WithFormFieldBlock } from "./FormField"

export type CheckboxFieldBlockProps = WithFormFieldBlock<
  CheckboxFieldControlProps
>

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
