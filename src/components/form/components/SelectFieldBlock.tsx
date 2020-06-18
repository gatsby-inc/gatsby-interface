/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { FormFieldBlock, WithFormFieldBlock } from "./FormFieldBlock"
import {
  StyledSelect,
  StyledSelectProps,
} from "./styled-primitives/StyledSelect"

export type SelectFieldBlockProps = WithFormFieldBlock<StyledSelectProps>

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
    required,
    ...rest
  } = props

  return (
    <FormFieldBlock
      id={id}
      label={label}
      error={error}
      hint={hint}
      required={required}
      labelSize={labelSize}
      validationMode={validationMode}
      layout={layout}
      className={className}
    >
      {controlProps => <StyledSelect ref={ref} {...controlProps} {...rest} />}
    </FormFieldBlock>
  )
})
