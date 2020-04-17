/** @jsx jsx */
import { jsx } from "@emotion/core"
import { action } from "@storybook/addon-actions"
import { CheckboxGroupFieldBlock, FormFieldBlockLayout } from ".."
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { getGroupFieldSandboxProps } from "./stories.utils"
import { withVariationsContainer } from "../../../utils/storybook"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"
import CheckboxGroupFieldBlockDocs from "./CheckboxGroupFieldBlock.mdx"
import { FormGroupOptionsDirection } from "../components/FormGroupField"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/CheckboxGroupFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    docs: {
      page: CheckboxGroupFieldBlockDocs,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
}

const options = getGroupFieldStoryOptions("short")
const optionsWithDefaultCheck = options.map((option, idx) => {
  if (idx === 0) {
    return {
      ...option,
      defaultChecked: true,
    }
  }
  return option
})

export const Basic = () => {
  return (
    <CheckboxGroupFieldBlock
      id="basic"
      name="basic"
      options={options}
      label="Field label"
    />
  )
}

export const Sandbox = () => {
  return (
    <CheckboxGroupFieldBlock
      id="sandbox"
      name="sandbox"
      options={options}
      {...getGroupFieldSandboxProps()}
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Required = () => {
  return (
    <CheckboxGroupFieldBlock
      id="required"
      name="required"
      options={options}
      label="Field label"
      required
    />
  )
}

export const Disabled = () => {
  return (
    <CheckboxGroupFieldBlock
      id="disabled"
      name="disabled"
      options={optionsWithDefaultCheck}
      label="Field label"
      disabled
    />
  )
}

export const WithHint = () => {
  return (
    <CheckboxGroupFieldBlock
      id="withHint"
      name="withHint"
      options={options}
      label="Field label"
      hint="Hint text"
    />
  )
}

export const WithError = () => {
  return (
    <CheckboxGroupFieldBlock
      id="withError"
      name="withError"
      options={optionsWithDefaultCheck}
      label="Field label"
      error="Error message"
    />
  )
}

export const WithErrorAndHint = () => {
  return (
    <CheckboxGroupFieldBlock
      id="withErrorAndHint"
      name="withErrorAndHint"
      options={options}
      label="Field label"
      hint="Hint text"
      error="Error message"
    />
  )
}

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => {
    return (
      <CheckboxGroupFieldBlock
        key={labelSize}
        id={labelSize}
        name={labelSize}
        options={options}
        label={`Label size: "${labelSize}"`}
        labelSize={labelSize}
      />
    )
  })

LabelSizes.story = {
  decorators: [withVariationsContainer],
}

const LAYOUTS: FormFieldBlockLayout[] = [`vertical`, `horizontal`]

export const Layouts = () =>
  LAYOUTS.map(layout => (
    <CheckboxGroupFieldBlock
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
    <CheckboxGroupFieldBlock
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
