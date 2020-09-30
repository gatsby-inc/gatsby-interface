/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta, Story } from "@storybook/react"
import { withVariationsContainer } from "../../utils/storybook"
import { StoryPropVariant } from "../../utils/storybook/components"
import { NumberBadge, NumberBadgeProps, NumberBadgeTone } from "."

export default {
  title: `NumberBadge`,
  component: NumberBadge,
} as Meta

const Template: Story<NumberBadgeProps> = args => <NumberBadge {...args} />

export const Basic = Template.bind({})

Basic.args = {
  children: 8,
}

const TONES: NumberBadgeTone[] = [`NEUTRAL`, `WARNING`, `DANGER`]

export const Tones = () =>
  TONES.map(tone => (
    <StoryPropVariant propName="tone" propValue={tone}>
      <NumberBadge key={tone} tone={tone}>
        8
      </NumberBadge>
    </StoryPropVariant>
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}
