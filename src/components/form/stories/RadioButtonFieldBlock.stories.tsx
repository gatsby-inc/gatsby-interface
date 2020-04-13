/** @jsx jsx */
import { jsx } from "@emotion/core"

import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import { FormFieldLabelSize } from "../components/FormField.helpers"
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
} from ".."

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

const VARIANTS: RadioButtonFieldVariant[] = ["default", "framed"]

export const Sandbox = () => {
  return (
    <RadioButtonFieldBlock
      id="radioButtonFieldBlock"
      name="radioButtonFieldBlock"
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

const OPTIONS_DIRECTIONS: FormFieldBlockLayout[] = [`horizontal`, `vertical`]

export const OptionsDirections = () =>
  OPTIONS_DIRECTIONS.map(optionsDirection => (
    <RadioButtonFieldBlock
      key={optionsDirection}
      id={`radioButtonFieldBlock__${optionsDirection}`}
      name={`radioButtonFieldBlock__${optionsDirection}`}
      options={options}
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
      id={`radioButtonFieldBlock__${variant}`}
      name={`radioButtonFieldBlock__${variant}`}
      options={options}
      label={`Variant: ${variant}`}
      onChange={e => action(`Change`)(e.target.value)}
      variant={variant}
    />
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}
