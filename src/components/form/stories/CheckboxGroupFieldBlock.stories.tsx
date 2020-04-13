/** @jsx jsx */
import { jsx } from "@emotion/core"
import README from "../README_INPUT_FIELD.md"
import { CheckboxGroupFieldBlock } from "../components/CheckboxGroupFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { getGroupFieldSandboxProps } from "./stories.utils"
import { withVariationsContainer } from "../../../utils/storybook"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/CheckboxGroupFieldBlock`,
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

const options = getGroupFieldStoryOptions("short")

export const Basic = () => {
  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
    />
  )
}

export const Sandbox = () => {
  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
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
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      required
    />
  )
}

export const Disabled = () => {
  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      disabled
    />
  )
}

export const WithHint = () => {
  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      hint="Hint text"
    />
  )
}

export const WithError = () => {
  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
      options={options}
      label="Field label"
      error="Error message"
    />
  )
}

export const WithErrorAndHint = () => {
  return (
    <CheckboxGroupFieldBlock
      id="checkboxGroupFieldBlock"
      name="checkboxGroupFieldBlock"
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
        id={`checkboxGroupFieldBlock--${labelSize}`}
        name={`checkboxGroupFieldBlock--${labelSize}`}
        options={options}
        label={`Label size: "${labelSize}"`}
        labelSize={labelSize}
      />
    )
  })

LabelSizes.story = {
  decorators: [withVariationsContainer],
}
