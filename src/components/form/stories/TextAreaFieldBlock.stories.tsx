/** @jsx jsx */
import { jsx } from "@emotion/core"

import { action } from "@storybook/addon-actions"
import { TextAreaFieldBlock, FormFieldBlockLayout, StyledLabelSize } from ".."
import { getFieldBlockSandboxProps } from "./stories.utils"
import { text } from "@storybook/addon-knobs"
import { withVariationsContainer } from "../../../utils/storybook"
import TextAreaFieldBlockDocs from "./TextAreaFieldBlock.mdx"

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/TextAreaFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    docs: {
      page: TextAreaFieldBlockDocs,
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

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
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

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => (
    <TextAreaFieldBlock
      key={labelSize}
      id={`TextAreaFieldBlock__size--${labelSize}`}
      label={`Label size: "${labelSize}"`}
      labelSize={labelSize}
    />
  ))

LabelSizes.story = {
  decorators: [withVariationsContainer],
}

const LAYOUTS: FormFieldBlockLayout[] = [`vertical`, `horizontal`]

export const Layouts = () =>
  LAYOUTS.map(layout => (
    <TextAreaFieldBlock
      key={layout}
      id={layout}
      label={`Layout: ${layout}`}
      layout={layout}
    />
  ))

Layouts.story = {
  decorators: [withVariationsContainer],
}
