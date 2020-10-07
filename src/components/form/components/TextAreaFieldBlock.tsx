/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useAriaFormField } from "../../form-skeletons"
import { FormFieldBlockBoilerplate, WithFormFieldBlock } from "./FormFieldBlock"
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

  const fieldData = useAriaFormField(id, {
    required: required,
    hasError: !!error,
    hasHint: !!hint,
    validationMode,
  })

  return (
    <FormFieldBlockBoilerplate
      fieldData={fieldData}
      id={id}
      label={label}
      error={error}
      hint={hint}
      labelSize={labelSize}
      layout={layout}
      className={className}
    >
      <StyledTextArea ref={ref} {...fieldData.controlProps} {...rest} />
    </FormFieldBlockBoilerplate>
  )
})
