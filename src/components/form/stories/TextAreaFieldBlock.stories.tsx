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
  disableAnimationsDecorator,
  withVariationsContainer,
} from "../../../utils/storybook"
import {
  TextAreaFieldBlock,
  TextAreaFieldBlockProps,
  FormFieldBlockLayout,
  StyledLabelSize,
} from ".."

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/TextAreaFieldBlock`,
  component: TextAreaFieldBlock,
  parameters: {
    componentSubtitle: (
      <Markdown>{`Accepts all of the props supported by \`<textarea />\` as well as the props shared between field block components`}</Markdown>
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
  decorators: [disableAnimationsDecorator],
} as Meta

const Template: Story<TextAreaFieldBlockProps> = args => (
  <TextAreaFieldBlock {...args} />
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
    <TextAreaFieldBlock
      key={labelSize}
      id={`TextAreaFieldBlock__size--${labelSize}`}
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
    <TextAreaFieldBlock
      key={layout}
      id={layout}
      label={`Layout: ${layout}`}
      layout={layout}
    />
  ))

Layouts.story = {
  decorators: [withVariationsContainer],
}
