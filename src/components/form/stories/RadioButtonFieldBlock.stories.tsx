/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta, Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import {
  commonFieldArgTypes,
  commonGroupFieldArgTypes,
  disabledArgs,
  requiredArgs,
  withErrorAndHintArgs,
  withErrorArgs,
  withHintArgs,
} from "./stories.utils"
import {
  withVariationsContainer,
  getGroupFieldStoryOptions,
} from "../../../utils/storybook"
import {
  RadioButtonFieldBlock,
  RadioButtonFieldBlockProps,
  RadioButtonFieldVariant,
  FormFieldBlockLayout,
  StyledLabelSize,
  FormGroupOptionsDirection,
} from ".."

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]
const VARIANTS: RadioButtonFieldVariant[] = ["default", "framed"]
const OPTIONS_DIRECTIONS: FormGroupOptionsDirection[] = [`row`, `column`]

export default {
  title: `Form/Styled Blocks/RadioButtonFieldBlock`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
  argTypes: {
    ...commonFieldArgTypes,
    ...commonGroupFieldArgTypes,
    variant: {
      description: `Changes how the selected option is displayed`,
      table: {
        type: {
          summary: VARIANTS.map(variant => `"${variant}"`).join(` | `),
        },
        defaultValue: {
          summary: `default`,
        },
      },
      control: {
        type: `select`,
        options: VARIANTS,
      },
    },
  },
} as Meta

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

const Template: Story<RadioButtonFieldBlockProps> = args => (
  <RadioButtonFieldBlock {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  id: `basic`,
  name: `basic`,
  label: `Label`,
  onChange: e => action(`Change`)(e.target.value),
  options,
}

export const Required = Template.bind({})

Required.args = { ...requiredArgs, options }

export const Disabled = Template.bind({})

Disabled.args = { ...disabledArgs, options: optionsWithDefaultCheck }

export const WithHint = Template.bind({})

WithHint.args = { ...withHintArgs, options }

export const WithError = Template.bind({})

WithError.args = { ...withErrorArgs, options: optionsWithDefaultCheck }

export const WithErrorAndHint = Template.bind({})

WithErrorAndHint.args = { ...withErrorAndHintArgs, options }

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
