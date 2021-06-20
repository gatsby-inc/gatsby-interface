/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useAriaFormField } from "../../form-skeletons"
import { FormFieldBlockBoilerplate, WithFormFieldBlock } from "./FormFieldBlock"
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
      <StyledInput
        ref={ref}
        {...fieldData.controlProps}
        css={{ width: `100%` }}
        {...rest}
      />
    </FormFieldBlockBoilerplate>
  )
})
