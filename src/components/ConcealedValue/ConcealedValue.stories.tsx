/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta, Story } from "@storybook/react"
import { ConcealedValue, ConcealedValueProps } from "./"

export default {
  title: `ConcealedValue`,
  component: ConcealedValue,
} as Meta

const Template: Story<ConcealedValueProps> = args => (
  <ConcealedValue {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  value: `abcde`,
  ariaLabel: `value`,
}
