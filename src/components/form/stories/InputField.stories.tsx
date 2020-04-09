/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  InputField,
  InputFieldWrapper,
  InputFieldLabel,
  InputFieldControl,
  InputFieldHint,
  InputFieldError,
} from "../components/InputField"
import { getFieldBlockSandboxProps } from "./stories.utils"
import { text } from "@storybook/addon-knobs"

export default {
  title: `Form/Styled Primitives/InputField`,
  parameters: {
    options: {
      showRoots: true,
    },
    readme: {
      sidebar: README,
    },
  },
}

export const Basic = () => (
  <InputField id="inputField">
    <InputFieldWrapper>
      <InputFieldLabel>Field label</InputFieldLabel>
      <InputFieldControl onChange={e => action(`Change`)(e.target.value)} />
    </InputFieldWrapper>
  </InputField>
)

export const Sandbox = () => {
  const {
    label,
    labelSize,
    error,
    hint,
    disabled,
    required,
  } = getFieldBlockSandboxProps()
  const placeholder = text(`Placeholder`, `This is a placeholder`)

  return (
    <InputField id="inputField" hasError={!!error} hasHint={!!hint}>
      <InputFieldWrapper>
        <InputFieldLabel size={labelSize} isRequired={required}>
          {label}
        </InputFieldLabel>
        <InputFieldControl
          onChange={e => action(`Change`)(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
        <InputFieldHint>{hint}</InputFieldHint>
        <InputFieldError>{error}</InputFieldError>
      </InputFieldWrapper>
    </InputField>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
