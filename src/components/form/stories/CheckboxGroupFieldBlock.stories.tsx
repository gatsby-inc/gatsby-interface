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
  CheckboxGroupFieldBlock,
  CheckboxGroupFieldBlockProps,
  FormFieldBlockLayout,
  StyledLabelSize,
  FormGroupOptionsDirection,
} from ".."

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/CheckboxGroupFieldBlock`,
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
  },
} as Meta

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

const Template: Story<CheckboxGroupFieldBlockProps> = args => (
  <CheckboxGroupFieldBlock {...args} />
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
