/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_TEXTAREA_FIELD.md"
import { action } from "@storybook/addon-actions"
import { getFieldSandboxProps, FieldDocDisclaimer } from "./stories.utils"
import { text } from "@storybook/addon-knobs"
import {
  TextAreaField,
  TextAreaFieldLabel,
  TextAreaFieldControl,
  TextAreaFieldHint,
  TextAreaFieldError,
} from ".."

export default {
  title: `Form/Styled Primitives/TextAreaField`,
  component: TextAreaField,
  subcomponents: {
    TextAreaFieldLabel,
    TextAreaFieldControl,
    TextAreaFieldHint,
    TextAreaFieldError,
  },
  parameters: {
    componentSubtitle: (
      <FieldDocDisclaimer
        fieldType="text area"
        blockComponentName="TextAreaFieldBlock"
        connectedComponentName="TextAreaConnectedField"
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
  <TextAreaField id="TextAreaField" hasError hasHint>
    <TextAreaFieldLabel isRequired>Field label</TextAreaFieldLabel>
    <TextAreaFieldControl />
    <TextAreaFieldHint>Field hint</TextAreaFieldHint>
    <TextAreaFieldError>Field error</TextAreaFieldError>
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
  } = getFieldSandboxProps()
  const placeholder = text(`Placeholder`, `This is a placeholder`)

  return (
    <TextAreaField
      id="TextAreaField__sandbox"
      hasError={!!error}
      hasHint={true}
    >
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
    </TextAreaField>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
