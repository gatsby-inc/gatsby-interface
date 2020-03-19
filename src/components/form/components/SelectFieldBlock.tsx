/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  SelectField,
  SelectFieldControlProps,
  SelectFieldWrapper,
  SelectFieldLabel,
  SelectFieldControl,
  SelectFieldHint,
  SelectFieldError,
} from "./SelectField"
import { WithFormFieldBlock } from "./FormField"

export type SelectFieldBlockProps = WithFormFieldBlock<SelectFieldControlProps>

export const SelectFieldBlock = React.forwardRef<
  HTMLSelectElement,
  SelectFieldBlockProps
>(function SelectFieldBlock(props, ref) {
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
      <SelectFieldWrapper className={className}>
        <SelectFieldLabel size={labelSize} isRequired={!!rest.required}>
          {label}
        </SelectFieldLabel>
        <SelectFieldControl ref={ref} {...rest} />
        <SelectFieldHint>{hint}</SelectFieldHint>
        <SelectFieldError validationMode={validationMode}>
          {error}
        </SelectFieldError>
      </SelectFieldWrapper>
    </SelectField>
  )
})
