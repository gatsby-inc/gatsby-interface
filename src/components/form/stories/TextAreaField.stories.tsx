/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_TEXTAREA_FIELD.md"
import { action } from "@storybook/addon-actions"
import { getFieldBlockSandboxProps } from "./stories.utils"
import { text } from "@storybook/addon-knobs"
import {
  TextAreaField,
  TextAreaFieldWrapper,
  TextAreaFieldLabel,
  TextAreaFieldControl,
  TextAreaFieldHint,
  TextAreaFieldError,
} from ".."

export default {
  title: `Form/Styled Primitives/TextAreaField`,
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
  <TextAreaField id="TextAreaField">
    <TextAreaFieldWrapper>
      <TextAreaFieldLabel>Field label</TextAreaFieldLabel>
      <TextAreaFieldControl />
    </TextAreaFieldWrapper>
  </TextAreaField>
)

export const Sandbox = () => {
  const {
    label,
    labelSize,
    error,
    hint,
    required,
    disabled,
  } = getFieldBlockSandboxProps()
  const placeholder = text(`Placeholder`, `This is a placeholder`)

  return (
    <TextAreaField id="TextAreaField" hasError={!!error} hasHint={true}>
      <TextAreaFieldWrapper>
        <TextAreaFieldLabel size={labelSize} isRequired={required}>
          {label}
        </TextAreaFieldLabel>
        <TextAreaFieldControl
          onChange={e => action(`Change`)(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
        <TextAreaFieldHint>{hint}</TextAreaFieldHint>
        <TextAreaFieldError>{error}</TextAreaFieldError>
      </TextAreaFieldWrapper>
    </TextAreaField>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
