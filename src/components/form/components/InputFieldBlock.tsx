/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { FormFieldBlock, WithFormFieldBlock } from "./FormFieldBlock"
import { StyledInput, StyledInputProps } from "./styled-primitives/StyledInput"

export type InputFieldBlockProps = WithFormFieldBlock<StyledInputProps>

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
      {controlProps => (
        <StyledInput
          ref={ref}
          {...controlProps}
          css={{ width: `100%` }}
          {...rest}
        />
      )}
    </FormFieldBlock>
  )
})
