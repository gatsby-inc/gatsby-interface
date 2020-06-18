/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { FormFieldBlock, WithFormFieldBlock } from "./FormFieldBlock"
import {
  StyledTextArea,
  StyledTextAreaProps,
} from "./styled-primitives/StyledTextArea"

export type TextAreaFieldBlockProps = WithFormFieldBlock<StyledTextAreaProps>

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
      {controlProps => <StyledTextArea ref={ref} {...controlProps} {...rest} />}
    </FormFieldBlock>
  )
})
