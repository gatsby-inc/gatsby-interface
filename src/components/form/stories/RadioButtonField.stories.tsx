/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  RadioButtonField,
  RadioButtonFieldLabel,
  RadioButtonFieldOptions,
  RadioButtonFieldOptionItem,
  RadioButtonFieldHint,
  RadioButtonFieldError,
} from "../components/RadioButtonField"
import { getFieldSandboxProps, FieldDocDisclaimer } from "./stories.utils"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"

const options = getGroupFieldStoryOptions("short")

export default {
  title: `Form/Styled Primitives/RadioButtonField`,
  component: RadioButtonField,
  subcomponents: {
    RadioButtonFieldLabel,
    RadioButtonFieldOptions,
    RadioButtonFieldOptionItem,
    RadioButtonFieldHint,
    RadioButtonFieldError,
  },
  parameters: {
    componentSubtitle: (
      <FieldDocDisclaimer
        fieldType="radio button"
        blockComponentName="RadioButtonFieldBlock"
        connectedComponentName="RadioButtonConnectedField"
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
  <RadioButtonField id="RadioButtonField" hasError hasHint>
    <RadioButtonFieldLabel isRequired>Field label</RadioButtonFieldLabel>
    <RadioButtonFieldOptions>
      {options.map(({ value, label }) => (
        <RadioButtonFieldOptionItem
          key={value}
          value={value}
          label={label}
          onChange={e => action(`Change`)(e.target.value)}
          name="radioField"
        />
      ))}
    </RadioButtonFieldOptions>
    <RadioButtonFieldHint>Field hint</RadioButtonFieldHint>
    <RadioButtonFieldError>Field error</RadioButtonFieldError>
  </RadioButtonField>
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

  return (
    <RadioButtonField
      id="RadioButtonField__sandbox"
      hasError={!!error}
      hasHint={!!hint}
    >
      <RadioButtonFieldLabel size={labelSize} isRequired={required}>
        {label}
      </RadioButtonFieldLabel>
      <RadioButtonFieldOptions>
        {options.map(({ value, label }) => (
          <RadioButtonFieldOptionItem
            key={value}
            value={value}
            label={label}
            onChange={e => action(`Change`)(e.target.value)}
            name="radioField"
            disabled={disabled}
          />
        ))}
      </RadioButtonFieldOptions>
      <RadioButtonFieldHint>{hint}</RadioButtonFieldHint>
      <RadioButtonFieldError>{error}</RadioButtonFieldError>
    </RadioButtonField>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
