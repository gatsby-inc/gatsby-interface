/** @jsx jsx */
import { jsx } from "@emotion/core"

import { action } from "@storybook/addon-actions"
import { SelectFieldBlock, FormFieldBlockLayout, StyledLabelSize } from ".."
import { getFieldBlockSandboxProps } from "./stories.utils"
import { text } from "@storybook/addon-knobs"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"
import { withVariationsContainer } from "../../../utils/storybook"
import SelectFieldBlockDocs from "./SelectFieldBlock.mdx"

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]

const options = getGroupFieldStoryOptions()

export default {
  title: `Form/Styled Blocks/SelectFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    docs: {
      page: SelectFieldBlockDocs,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
}

export const Basic = () => (
  <SelectFieldBlock
    id="SelectFieldBlock"
    label="Field label"
    onChange={e => action(`Change`)(e.target.value)}
    options={options}
  />
)

export const Sandbox = () => {
  const placeholder = text(`Placeholder`, `This is a placeholder`)
  return (
    <SelectFieldBlock
      id="SelectFieldBlock"
      placeholder={placeholder}
      {...getFieldBlockSandboxProps()}
      options={options}
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Required = () => (
  <SelectFieldBlock
    id="SelectFieldBlock"
    label="Field label"
    options={options}
    required
  />
)

export const Disabled = () => (
  <SelectFieldBlock
    id="SelectFieldBlock"
    label="Field label"
    options={options}
    disabled
  />
)

export const WithHint = () => (
  <SelectFieldBlock
    id="SelectFieldBlock"
    label="Field label"
    options={options}
    hint="Hint text"
  />
)

export const WithError = () => (
  <SelectFieldBlock
    id="SelectFieldBlock"
    label="Field label"
    options={options}
    error="Error message"
  />
)

export const WithErrorAndHint = () => (
  <SelectFieldBlock
    id="SelectFieldBlock"
    label="Field label"
    options={options}
    hint="Hint text"
    error="Error message"
  />
)

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => (
    <SelectFieldBlock
      key={labelSize}
      id={`SelectFieldBlock__size--${labelSize}`}
      label={`Label size: "${labelSize}"`}
      labelSize={labelSize}
      options={options}
    />
  ))

LabelSizes.story = {
  decorators: [withVariationsContainer],
}

const LAYOUTS: FormFieldBlockLayout[] = [`vertical`, `horizontal`]

export const Layouts = () =>
  LAYOUTS.map(layout => (
    <SelectFieldBlock
      key={layout}
      id={layout}
      options={options}
      label={`Layout: ${layout}`}
      onChange={e => action(`Change`)(e.target.value)}
      layout={layout}
    />
  ))

Layouts.story = {
  decorators: [withVariationsContainer],
}
