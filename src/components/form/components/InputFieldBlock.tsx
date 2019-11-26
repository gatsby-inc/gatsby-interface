/** @jsx jsx */
import { jsx } from "@emotion/core"

import InputField from "./InputField"
import { FormFieldLabelSize } from "./FormField"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"
import { InputFieldSkeletonControlProps } from "../../form-skeletons/components/InputFieldSkeleton"

export type InputFieldBlockProps = {
  id: string;
  label: string;
  labelSize?: FormFieldLabelSize;
  error?: string;
  hint?: string;
  validationMode?: ErrorValidationMode;
} & InputFieldSkeletonControlProps

export function InputFieldBlock(props: InputFieldBlockProps) {
  const {
    id,
    label,
    labelSize,
    error,
    hint = ``,
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
        <InputField.Control {...rest} />
        <InputField.Error validationMode={validationMode}>
          {error}
        </InputField.Error>
        <InputField.Hint>{hint}</InputField.Hint>
      </InputField.Wrapper>
    </InputField>
  )
}

export default InputFieldBlock
