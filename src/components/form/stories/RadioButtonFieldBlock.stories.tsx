/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import { RadioButtonFieldBlock } from "../components/RadioButtonFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { getGroupFieldSandboxProps } from "./stories.utils"
import { withVariationsContainer } from "../../../utils/storybook"
import { getGroupFieldStoryOptions } from "../../form-skeletons/stories/storyUtils"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/RadioButtonFieldBlock`,
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

const options = getGroupFieldStoryOptions(`short`)

export const Basic = () => (
  <RadioButtonFieldBlock
    id="radioButtonFieldBlock"
    name="radioButtonFieldBlock"
    options={options}
    label="Field label"
    onChange={e => action(`Change`)(e.target.value)}
  />
)

export const Sandbox = () => {
  return (
    <RadioButtonFieldBlock
      id="radioButtonFieldBlock"
      name="radioButtonFieldBlock"
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

export const Required = () => (
  <RadioButtonFieldBlock
    id="radioButtonFieldBlock"
    name="radioButtonFieldBlock"
    options={options}
    label="Field label"
    required
  />
)

export const Disabled = () => (
  <RadioButtonFieldBlock
    id="radioButtonFieldBlock"
    name="radioButtonFieldBlock"
    options={options}
    label="Field label"
    disabled
  />
)

export const WithHint = () => (
  <RadioButtonFieldBlock
    id="radioButtonFieldBlock"
    name="radioButtonFieldBlock"
    options={options}
    label="Field label"
    hint="Hint text"
  />
)

export const WithError = () => (
  <RadioButtonFieldBlock
    id="radioButtonFieldBlock"
    name="radioButtonFieldBlock"
    options={options}
    label="Field label"
    error="Error message"
  />
)

export const WithErrorAndHint = () => (
  <RadioButtonFieldBlock
    id="radioButtonFieldBlock"
    name="radioButtonFieldBlock"
    options={options}
    label="Field label"
    hint="Hint text"
    error="Error message"
  />
)

export const WithRichText = () => (
  <RadioButtonFieldBlock
    id="radioButtonFieldBlock"
    name="radioButtonFieldBlock"
    options={options}
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
    <RadioButtonFieldBlock
      key={labelSize}
      id={`radioButtonFieldBlock__size--${labelSize}`}
      name={`radioButtonFieldBlock__size--${labelSize}`}
      options={options}
      label={`Label size: "${labelSize}"`}
      labelSize={labelSize}
    />
  ))

LabelSizes.story = {
  decorators: [withVariationsContainer],
}
