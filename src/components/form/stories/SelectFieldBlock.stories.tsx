/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta, Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Markdown from "markdown-to-jsx"
import {
  commonFieldArgTypes,
  disabledArgs,
  requiredArgs,
  withErrorAndHintArgs,
  withErrorArgs,
  withHintArgs,
} from "./stories.utils"
import {
  withVariationsContainer,
  getGroupFieldStoryOptions,
  disableAnimationsDecorator,
} from "../../../utils/storybook"
import {
  SelectFieldBlock,
  SelectFieldBlockProps,
  FormFieldBlockLayout,
  StyledLabelSize,
} from ".."

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]

const options = getGroupFieldStoryOptions()

export default {
  title: `Form/Styled Blocks/SelectFieldBlock`,
  parameters: {
    componentSubtitle: (
      <Markdown>{`Accepts all of the props supported by \`<select />\` as well as the props shared between field block components`}</Markdown>
    ),
    layout: `padded`,
    options: {
      showRoots: true,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
  decorators: [disableAnimationsDecorator],
  argTypes: {
    ...commonFieldArgTypes,
  },
} as Meta

const Template: Story<SelectFieldBlockProps> = args => (
  <SelectFieldBlock {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  id: `basic`,
  label: `Label`,
  onChange: e => action(`Change`)(e.target.value),
  options,
}

export const Required = Template.bind({})

Required.args = { ...requiredArgs, options }

export const Disabled = Template.bind({})

Disabled.args = { ...disabledArgs, options }

export const WithHint = Template.bind({})

WithHint.args = { ...withHintArgs, options }

export const WithError = Template.bind({})

WithError.args = { ...withErrorArgs, options }

export const WithErrorAndHint = Template.bind({})

WithErrorAndHint.args = { ...withErrorAndHintArgs, options }

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
