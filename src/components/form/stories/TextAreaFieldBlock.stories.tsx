/** @jsx jsx */
import { jsx } from "@emotion/core"

import { DecoratorFn } from "@storybook/react"
import { StoryUtils } from "../../../utils/storybook"
import README from "../README_TEXTAREA_FIELD.md"
import { action } from "@storybook/addon-actions"
import { TextAreaFieldBlock } from "../components/TextAreaFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { getFieldBlockSandboxProps } from "./stories.utils"
import { text } from "@storybook/addon-knobs"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form — styled blocks/TextAreaFieldBlock`,
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
    chromatic: { pauseAnimationAtEnd: true },
  },
}

export const Basic = () => (
  <TextAreaFieldBlock
    id="TextAreaFieldBlock"
    label="Field label"
    onChange={e => action(`Change`)(e.target.value)}
  />
)

export const Sandbox = () => {
  const placeholder = text(`Placeholder`, `This is a placeholder`)
  return (
    <TextAreaFieldBlock
      id="TextAreaFieldBlock"
      placeholder={placeholder}
      {...getFieldBlockSandboxProps()}
    />
  )
}

export const Required = () => (
  <TextAreaFieldBlock id="TextAreaFieldBlock" label="Field label" required />
)

export const Disabled = () => (
  <TextAreaFieldBlock id="TextAreaFieldBlock" label="Field label" disabled />
)

export const WithHint = () => (
  <TextAreaFieldBlock
    id="TextAreaFieldBlock"
    label="Field label"
    hint="Hint text"
  />
)

export const WithError = () => (
  <TextAreaFieldBlock
    id="TextAreaFieldBlock"
    label="Field label"
    error="Error message"
  />
)

export const WithErrorAndHint = () => (
  <TextAreaFieldBlock
    id="TextAreaFieldBlock"
    label="Field label"
    hint="Hint text"
    error="Error message"
  />
)

export const WithRichText = () => (
  <TextAreaFieldBlock
    id="TextAreaFieldBlock"
    label={
      <span>
        This is a <strong>rich label</strong>
      </span>
    }
    hint={
      <span>
        This is a <em>rich hint text</em>
      </span>
    }
    error={
      <span>
        This is a <u>rich error message</u>
      </span>
    }
  />
)

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => (
    <TextAreaFieldBlock
      key={labelSize}
      id={`TextAreaFieldBlock__size--${labelSize}`}
      label={`Label size: "${labelSize}"`}
      labelSize={labelSize}
    />
  ))
