/** @jsx jsx */
import { jsx } from "@emotion/core"

import { DecoratorFn } from "@storybook/react"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  SelectField,
  SelectFieldWrapper,
  SelectFieldLabel,
  SelectFieldControl,
  SelectFieldHint,
  SelectFieldError,
} from "../components/SelectField"
import { getFieldBlockSandboxProps } from "./stories.utils"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"

const options = getGroupFieldStoryOptions()

export default {
  title: `Form — styled primitives/SelectField`,
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
  parameters: {
    readme: {
      sidebar: README,
    },
  },
}

export const Basic = () => (
  <SelectField id="SelectField">
    <SelectFieldWrapper>
      <SelectFieldLabel>Field label</SelectFieldLabel>
      <SelectFieldControl
        onChange={e => action(`Change`)(e.target.value)}
        options={options}
      />
    </SelectFieldWrapper>
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
  } = getFieldBlockSandboxProps()

  return (
    <SelectField id="SelectField" hasError={!!error} hasHint={!!hint}>
      <SelectFieldWrapper>
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
      </SelectFieldWrapper>
    </SelectField>
  )
}
