/** @jsx jsx */
import { jsx } from "@emotion/core"

import InputField from "./InputField"

export type InputFieldBlockProps = {
  id: string;
  error: string;
  hint: string;
} & Pick<JSX.IntrinsicElements["input"], "className">

export function InputFieldBlock(props: InputFieldBlockProps) {
  const { id, error, hint, className, ...rest } = props

  return (
    <InputField id={id} hasError={!!error} hasHint={!!hint}>
      <InputField.Wrapper className={className}>
        <InputField.Label>Input</InputField.Label>
        <InputField.Control {...rest} />
        <InputField.Error>{error}</InputField.Error>
        <InputField.Hint>{hint}</InputField.Hint>
      </InputField.Wrapper>
    </InputField>
  )
}

export default InputFieldBlock
