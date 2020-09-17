/** @jsx jsx */
import { jsx } from "@emotion/core"
import { action } from "@storybook/addon-actions"
import { getGroupFieldSandboxProps } from "./stories.utils"
import {
  withVariationsContainer,
  radioKnobOptions,
} from "../../../utils/storybook"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"
import { radios } from "@storybook/addon-knobs"
import {
  RadioButtonFieldBlock,
  RadioButtonFieldVariant,
  FormFieldBlockLayout,
  StyledLabelSize,
} from ".."
import { FormGroupOptionsDirection } from "../types"
import RadioButtonFieldBlockDocs from "./RadioButtonFieldBlock.mdx"

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/RadioButtonFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    docs: {
      page: RadioButtonFieldBlockDocs,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
}

const options = getGroupFieldStoryOptions(`short`)
const optionsWithDefaultCheck = options.map((option, idx) => {
  if (idx === 0) {
    return {
      ...option,
      defaultChecked: true,
    }
  }
  return option
})

export const Basic = () => (
  <RadioButtonFieldBlock
    id="basic"
    name="basic"
    options={options}
    label="Field label"
    onChange={e => action(`Change`)(e.target.value)}
  />
)

const VARIANTS: RadioButtonFieldVariant[] = ["default", "framed"]

export const Sandbox = () => {
  return (
    <RadioButtonFieldBlock
      id="sandbox"
      name="sandbox"
      options={options}
      variant={radios("variant", radioKnobOptions(VARIANTS), "default")}
      {...getGroupFieldSandboxProps()}
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Required = () => (
  <RadioButtonFieldBlock
    id="required"
    name="required"
    options={options}
    label="Field label"
    required
  />
)

export const Disabled = () => (
  <RadioButtonFieldBlock
    id="disabled"
    name="disabled"
    options={optionsWithDefaultCheck}
    label="Field label"
    disabled
  />
)

export const WithHint = () => (
  <RadioButtonFieldBlock
    id="withHint"
    name="withHint"
    options={options}
    label="Field label"
    hint="Hint text"
  />
)

export const WithError = () => (
  <RadioButtonFieldBlock
    id="withError"
    name="withError"
    options={optionsWithDefaultCheck}
    label="Field label"
    error="Error message"
  />
)

export const WithErrorAndHint = () => (
  <RadioButtonFieldBlock
    id="withErrorAndHint"
    name="withErrorAndHint"
    options={options}
    label="Field label"
    hint="Hint text"
    error="Error message"
  />
)

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => (
    <RadioButtonFieldBlock
      key={labelSize}
      id={labelSize}
      name={labelSize}
      options={options}
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
    <RadioButtonFieldBlock
      key={layout}
      id={layout}
      name={layout}
      options={optionsWithDefaultCheck}
      label={`Layout: ${layout}`}
      onChange={e => action(`Change`)(e.target.value)}
      layout={layout}
    />
  ))

Layouts.story = {
  decorators: [withVariationsContainer],
}

const OPTIONS_DIRECTIONS: FormGroupOptionsDirection[] = [`row`, `column`]

export const OptionsDirections = () =>
  OPTIONS_DIRECTIONS.map(optionsDirection => (
    <RadioButtonFieldBlock
      key={optionsDirection}
      id={optionsDirection}
      name={optionsDirection}
      options={optionsWithDefaultCheck}
      label={`Options Direction: ${optionsDirection}`}
      onChange={e => action(`Change`)(e.target.value)}
      optionsDirection={optionsDirection}
    />
  ))

OptionsDirections.story = {
  decorators: [withVariationsContainer],
}

export const Variants = () =>
  VARIANTS.map(variant => (
    <RadioButtonFieldBlock
      key={variant}
      id={variant}
      name={variant}
      options={optionsWithDefaultCheck}
      label={`Variant: ${variant}`}
      onChange={e => action(`Change`)(e.target.value)}
      variant={variant}
    />
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}
