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
import { withVariationsContainer } from "../../../utils/storybook"
import {
  InputFieldBlock,
  InputFieldBlockProps,
  FormFieldBlockLayout,
  StyledLabelSize,
} from ".."

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/InputFieldBlock`,
  component: InputFieldBlock,
  parameters: {
    componentSubtitle: (
      <Markdown>{`Accepts all of the props supported by \`<input />\` as well as the props shared between field block components`}</Markdown>
    ),
    layout: `padded`,
    options: {
      showRoots: true,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
  argTypes: {
    ...commonFieldArgTypes,
    placeholder: {
      table: {
        type: {
          summary: `string`,
        },
      },
      control: {
        type: `text`,
      },
    },
  },
} as Meta

const Template: Story<InputFieldBlockProps> = args => (
  <InputFieldBlock {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  id: `basic`,
  label: `Label`,
  onChange: e => action(`Change`)(e.target.value),
}

export const Required = Template.bind({})

Required.args = requiredArgs

export const Disabled = Template.bind({})

Disabled.args = disabledArgs

export const WithHint = Template.bind({})

WithHint.args = withHintArgs

export const WithError = Template.bind({})

WithError.args = withErrorArgs

export const WithErrorAndHint = Template.bind({})

WithErrorAndHint.args = withErrorAndHintArgs

export const LabelSizes = () =>
  LABEL_SIZES.map(labelSize => (
    <InputFieldBlock
      key={labelSize}
      id={labelSize}
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
