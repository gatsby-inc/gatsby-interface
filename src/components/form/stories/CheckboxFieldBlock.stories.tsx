/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
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
    id="basic"
    label="Field label"
    onChange={e => action(`Change`)(e.target.value)}
  />
)

export const Sandbox = () => {
  const placeholder = text(`Placeholder`, `This is a placeholder`)
  return (
    <CheckboxFieldBlock
      id="sandbox"
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
  <CheckboxFieldBlock id="required" label="Field label" required />
)

export const Disabled = () => (
  <React.Fragment>
    <CheckboxFieldBlock id="disabled" label="Field label" disabled />
    <br />
    <CheckboxFieldBlock
      id="disabled--checked"
      label="Field label"
      disabled
      checked
    />
  </React.Fragment>
)

export const WithHint = () => (
  <CheckboxFieldBlock id="withHint" label="Field label" hint="Hint text" />
)

export const WithError = () => (
  <CheckboxFieldBlock
    id="withError"
    label="Field label"
    error="Error message"
  />
)

export const WithErrorAndHint = () => (
  <CheckboxFieldBlock
    id="withErrorAndHint"
    label="Field label"
    hint="Hint text"
    error="Error message"
  />
)

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => (
    <CheckboxFieldBlock
      key={labelSize}
      id={labelSize}
      label={`Label size: "${labelSize}"`}
      labelSize={labelSize}
    />
  ))

LabelSizes.story = {
  decorators: [withVariationsContainer],
}
