/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  CheckboxGroupField,
  CheckboxGroupFieldLabel,
  CheckboxGroupFieldOptions,
  CheckboxGroupFieldOptionItem,
  CheckboxGroupFieldHint,
  CheckboxGroupFieldError,
} from "../components/CheckboxGroupField"
import { getFieldSandboxProps, FieldDocDisclaimer } from "./stories.utils"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"

const options = getGroupFieldStoryOptions("short")

export default {
  title: `Form/Styled Primitives/CheckboxGroupField`,
  component: CheckboxGroupField,
  subcomponents: {
    CheckboxGroupFieldLabel,
    CheckboxGroupFieldOptions,
    CheckboxGroupFieldOptionItem,
    CheckboxGroupFieldHint,
    CheckboxGroupFieldError,
  },
  parameters: {
    componentSubtitle: (
      <FieldDocDisclaimer
        fieldType="checkbox group"
        blockComponentName="CheckboxGroupFieldBlock"
        connectedComponentName="CheckboxGroupConnectedField"
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
  <CheckboxGroupField id="CheckboxGroupField" hasError hasHint>
    <CheckboxGroupFieldLabel isRequired>Field label</CheckboxGroupFieldLabel>
    <CheckboxGroupFieldOptions>
      {options.map(({ value, label }) => (
        <CheckboxGroupFieldOptionItem
          key={value}
          value={value}
          label={label}
          onChange={e => action(`Change`)(e.target.value)}
          name="radioField"
        />
      ))}
    </CheckboxGroupFieldOptions>
    <CheckboxGroupFieldHint>Field hint</CheckboxGroupFieldHint>
    <CheckboxGroupFieldError>Field error</CheckboxGroupFieldError>
  </CheckboxGroupField>
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
    <CheckboxGroupField
      id="CheckboxGroupField__sandbox"
      hasError={!!error}
      hasHint={!!hint}
    >
      <CheckboxGroupFieldLabel size={labelSize} isRequired={required}>
        {label}
      </CheckboxGroupFieldLabel>
      <CheckboxGroupFieldOptions>
        {options.map(({ value, label }) => (
          <CheckboxGroupFieldOptionItem
            key={value}
            value={value}
            label={label}
            onChange={e => action(`Change`)(e.target.value)}
            name="radioField"
            disabled={disabled}
          />
        ))}
      </CheckboxGroupFieldOptions>
      <CheckboxGroupFieldHint>{hint}</CheckboxGroupFieldHint>
      <CheckboxGroupFieldError>{error}</CheckboxGroupFieldError>
    </CheckboxGroupField>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
