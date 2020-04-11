/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  InputField,
  InputFieldLabel,
  InputFieldControl,
  InputFieldHint,
  InputFieldError,
} from "../components/InputField"
import { getFieldSandboxProps, FieldDocDisclaimer } from "./stories.utils"
import { text } from "@storybook/addon-knobs"

export default {
  title: `Form/Styled Primitives/InputField`,
  component: InputField,
  subcomponents: {
    InputFieldLabel,
    InputFieldControl,
    InputFieldHint,
    InputFieldError,
  },
  parameters: {
    componentSubtitle: (
      <FieldDocDisclaimer
        fieldType="input"
        blockComponentName="InputFieldBlock"
        connectedComponentName="InputConnectedField"
      />
    ),
    layout: `padded`,
    options: {
      showRoots: true,
    },
    readme: {
      sidebar: README,
    },
  },
}

export const Basic = () => (
  <InputField id="inputField" hasError hasHint>
    <InputFieldLabel isRequired>Field label</InputFieldLabel>
    <InputFieldControl onChange={e => action(`Change`)(e.target.value)} />
    <InputFieldHint>Field hint</InputFieldHint>
    <InputFieldError>Field error</InputFieldError>
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
  } = getFieldSandboxProps()
  const placeholder = text(`Placeholder`, `This is a placeholder`)

  return (
    <InputField id="inputField__sandbox" hasError={!!error} hasHint={!!hint}>
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
    </InputField>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
