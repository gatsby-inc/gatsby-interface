/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  CheckboxField,
  CheckboxFieldLabel,
  CheckboxFieldControl,
  CheckboxFieldHint,
  CheckboxFieldError,
  CheckboxFieldWrapper,
} from "../components/CheckboxField"
import { getFieldSandboxProps, FieldDocDisclaimer } from "./stories.utils"
import { text } from "@storybook/addon-knobs"

export default {
  title: `Form/Styled Primitives/CheckboxField`,
  component: CheckboxField,
  subcomponents: {
    CheckboxFieldLabel,
    CheckboxFieldControl,
    CheckboxFieldHint,
    CheckboxFieldError,
  },
  parameters: {
    componentSubtitle: (
      <FieldDocDisclaimer
        fieldType="single checkbox"
        blockComponentName="CheckboxFieldBlock"
        connectedComponentName="CheckboxConnectedField"
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
  <CheckboxField id="inputField" hasError hasHint>
    <CheckboxFieldWrapper>
      <CheckboxFieldLabel isRequired>Field label</CheckboxFieldLabel>
      <CheckboxFieldControl onChange={e => action(`Change`)(e.target.value)} />
      <CheckboxFieldHint>Field hint</CheckboxFieldHint>
      <CheckboxFieldError>Field error</CheckboxFieldError>
    </CheckboxFieldWrapper>
  </CheckboxField>
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
    <CheckboxField id="inputField__sandbox" hasError={!!error} hasHint={!!hint}>
      <CheckboxFieldWrapper>
        <CheckboxFieldLabel size={labelSize} isRequired={required}>
          {label}
        </CheckboxFieldLabel>
        <CheckboxFieldControl
          onChange={e => action(`Change`)(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
        <CheckboxFieldHint>{hint}</CheckboxFieldHint>
        <CheckboxFieldError>{error}</CheckboxFieldError>
      </CheckboxFieldWrapper>
    </CheckboxField>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
