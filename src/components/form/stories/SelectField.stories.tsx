/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  SelectField,
  SelectFieldLabel,
  SelectFieldControl,
  SelectFieldHint,
  SelectFieldError,
} from "../components/SelectField"
import { getFieldSandboxProps, FieldDocDisclaimer } from "./stories.utils"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"

const options = getGroupFieldStoryOptions("long")

export default {
  title: `Form/Styled Primitives/SelectField`,
  component: SelectField,
  subcomponents: {
    SelectFieldLabel,
    SelectFieldControl,
    SelectFieldHint,
    SelectFieldError,
  },
  parameters: {
    componentSubtitle: (
      <FieldDocDisclaimer
        fieldType="select"
        blockComponentName="SelectFieldBlock"
        connectedComponentName="SelectConnectedField"
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
  <SelectField id="SelectField" hasError hasHint>
    <SelectFieldLabel isRequired>Field label</SelectFieldLabel>
    <SelectFieldControl
      onChange={e => action(`Change`)(e.target.value)}
      options={options}
    />
    <SelectFieldHint>Field hint</SelectFieldHint>
    <SelectFieldError>Field error</SelectFieldError>
  </SelectField>
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
    <SelectField id="SelectField__sandbox" hasError={!!error} hasHint={!!hint}>
      <SelectFieldLabel size={labelSize} isRequired={required}>
        {label}
      </SelectFieldLabel>
      <SelectFieldControl
        options={options}
        onChange={e => action(`Change`)(e.target.value)}
        disabled={disabled}
        required={required}
      />
      <SelectFieldHint>{hint}</SelectFieldHint>
      <SelectFieldError>{error}</SelectFieldError>
    </SelectField>
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
