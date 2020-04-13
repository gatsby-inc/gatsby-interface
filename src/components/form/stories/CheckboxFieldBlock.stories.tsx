/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import { CheckboxFieldBlock } from "../components/CheckboxFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { getFieldBlockSandboxProps } from "./stories.utils"
import { text } from "@storybook/addon-knobs"
import { withVariationsContainer } from "../../../utils/storybook"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/CheckboxFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    readme: {
      sidebar: README,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
}

export const Basic = () => (
  <CheckboxFieldBlock
    id="inputFieldBlock"
    label="Field label"
    onChange={e => action(`Change`)(e.target.value)}
  />
)

export const Sandbox = () => {
  const placeholder = text(`Placeholder`, `This is a placeholder`)
  return (
    <CheckboxFieldBlock
      id="inputFieldBlock"
      placeholder={placeholder}
      {...getFieldBlockSandboxProps()}
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Required = () => (
  <CheckboxFieldBlock id="inputFieldBlock" label="Field label" required />
)

export const Disabled = () => (
  <CheckboxFieldBlock id="inputFieldBlock" label="Field label" disabled />
)

export const WithHint = () => (
  <CheckboxFieldBlock
    id="inputFieldBlock"
    label="Field label"
    hint="Hint text"
  />
)

export const WithError = () => (
  <CheckboxFieldBlock
    id="inputFieldBlock"
    label="Field label"
    error="Error message"
  />
)

export const WithErrorAndHint = () => (
  <CheckboxFieldBlock
    id="inputFieldBlock"
    label="Field label"
    hint="Hint text"
    error="Error message"
  />
)

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => (
    <CheckboxFieldBlock
      key={labelSize}
      id={`inputFieldBlock__size--${labelSize}`}
      label={`Label size: "${labelSize}"`}
      labelSize={labelSize}
    />
  ))

LabelSizes.story = {
  decorators: [withVariationsContainer],
}
