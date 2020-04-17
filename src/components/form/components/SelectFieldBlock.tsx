/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  SelectField,
  SelectFieldControlProps,
  SelectFieldLabel,
  SelectFieldControl,
  SelectFieldHint,
  SelectFieldError,
} from "./SelectField"
import { WithFormFieldBlock, FormFieldContainer } from "./FormField"

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
    layout,
    ...rest
  } = props

  return (
    <FormFieldContainer layout={layout} className={className}>
      <SelectField id={id} hasError={!!error} hasHint={!!hint}>
        <SelectFieldLabel size={labelSize} isRequired={!!rest.required}>
          {label}
        </SelectFieldLabel>
        <SelectFieldControl ref={ref} {...rest} />
        <SelectFieldHint>{hint}</SelectFieldHint>
        <SelectFieldError validationMode={validationMode}>
          {error}
        </SelectFieldError>
      </SelectField>
    </FormFieldContainer>
  )
})
