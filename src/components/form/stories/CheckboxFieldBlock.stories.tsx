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
  CheckboxFieldBlock,
  CheckboxFieldBlockProps,
  StyledLabelSize,
} from ".."

const LABEL_SIZES: StyledLabelSize[] = [`L`, `M`, `S`]

export default {
  title: `Form/Styled Blocks/CheckboxFieldBlock`,
  parameters: {
    componentSubtitle: (
      <Markdown>{`Accepts all of the props supported by \`<input type="checkbox" />\` as well as the props shared between field block components`}</Markdown>
    ),
    layout: `padded`,
    options: {
      showRoots: true,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
  argTypes: {
    ...commonFieldArgTypes,
  },
} as Meta

const Template: Story<CheckboxFieldBlockProps> = args => (
  <CheckboxFieldBlock {...args} />
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
    <CheckboxFieldBlock
      key={labelSize}
      id={labelSize}
      label={`Label size: "${labelSize}"`}
      labelSize={labelSize}
    />
  ))

LabelSizes.story = {
  decorators: [withVariationsContainer],
}
