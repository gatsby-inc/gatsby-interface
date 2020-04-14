/** @jsx jsx */
import { jsx } from "@emotion/core"

import { action } from "@storybook/addon-actions"
import { CheckboxFieldBlock } from ".."
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { getFieldBlockSandboxProps } from "./stories.utils"
import { text } from "@storybook/addon-knobs"
import { withVariationsContainer } from "../../../utils/storybook"
import CheckboxFieldBlockDocs from "./CheckboxFieldBlock.mdx"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/CheckboxFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    docs: {
      page: CheckboxFieldBlockDocs,
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

export const WithRichText = () => (
  <CheckboxFieldBlock
    id="inputFieldBlock"
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
