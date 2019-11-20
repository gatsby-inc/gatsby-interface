/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import InputField, { InputFieldControlProps } from "./InputField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type InputFieldBlockProps = {
  id: string;
  label: string;
  labelSize?: FormFieldLabelSize;
  error?: string;
  hint?: string;
  validationMode?: ErrorValidationMode;
} & InputFieldControlProps

const InputFieldBlock = React.forwardRef<
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

  const isRequired = rest.required ? rest.required : false

  return (
    <InputField id={id} hasError={!!error} hasHint={!!hint}>
      <InputField.Wrapper className={className}>
        <InputField.Label size={labelSize} isRequired={isRequired}>
          {label}
        </InputField.Label>
        <InputField.Control ref={ref} {...rest} />
        <InputField.Hint>{hint}</InputField.Hint>
        <InputField.Error validationMode={validationMode}>
          {error}
        </InputField.Error>
      </InputField.Wrapper>
    </InputField>
  )
})

export default InputFieldBlock

/*

import InputField from "./InputField"
import FieldBlock from "./FieldBlock"

const InputFieldBlock = FieldBlock(InputField)

export default InputFieldBlock
*/
