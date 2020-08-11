/** @jsx jsx */
import { jsx } from "@emotion/core"
import { action } from "@storybook/addon-actions"
import { InputFieldBlock, FormFieldBlockLayout } from ".."
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { getFieldBlockSandboxProps } from "./stories.utils"
import { text, radios } from "@storybook/addon-knobs"
import {
  withVariationsContainer,
  radioKnobOptions,
} from "../../../utils/storybook"
import InputFieldBlockDocs from "./InputFieldBlock.mdx"
import { InputSize } from "../styles"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]
const SIZES: InputSize[] = [`S`, `M`, `L`]

export default {
  title: `Form/Styled Blocks/InputFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    docs: {
      page: InputFieldBlockDocs,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
}

export const Basic = () => (
  <InputFieldBlock
    id="basic"
    label="Field label"
    onChange={e => action(`Change`)(e.target.value)}
  />
)

export const Sandbox = () => {
  const placeholder = text(`Placeholder`, `This is a placeholder`)
  return (
    <InputFieldBlock
      id="sandbox"
      placeholder={placeholder}
      size={radios("size", radioKnobOptions(SIZES), "M")}
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
  <InputFieldBlock id="required" label="Field label" required />
)

export const Disabled = () => (
  <InputFieldBlock id="disabled" label="Field label" disabled />
)

export const WithHint = () => (
  <InputFieldBlock id="withHint" label="Field label" hint="Hint text" />
)

export const WithError = () => (
  <InputFieldBlock id="withError" label="Field label" error="Error message" />
)

export const WithErrorAndHint = () => (
  <InputFieldBlock
    id="withErrorAndHint"
    label="Field label"
    hint="Hint text"
    error="Error message"
  />
)

export const Sizes = () =>
  SIZES.map(size => (
    <InputFieldBlock
      key={size}
      id={`InputFieldBlock__size--${size}`}
      label={`Size: "${size}"`}
      size={size}
      defaultValue="Default value"
    />
  ))

Sizes.story = {
  decorators: [withVariationsContainer],
}

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => (
    <InputFieldBlock
      key={labelSize}
      id={`InputFieldBlock__labelSize--${labelSize}`}
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
    <InputFieldBlock
      key={layout}
      id={layout}
      name={layout}
      label={`Layout: ${layout}`}
      onChange={e => action(`Change`)(e.target.value)}
      layout={layout}
    />
  ))

Layouts.story = {
  decorators: [withVariationsContainer],
}
