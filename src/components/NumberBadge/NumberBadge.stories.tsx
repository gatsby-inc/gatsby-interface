/** @jsx jsx */
import * as React from "react"
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
  children: 80,
}

const TONES: NumberBadgeTone[] = [`NEUTRAL`, `WARNING`, `DANGER`, `SUCCESS`]

export const Tones = () =>
  TONES.map(tone => (
    <StoryPropVariant propName="tone" propValue={tone}>
      <NumberBadge key={tone} tone={tone} withBorder={true}>
        80
      </NumberBadge>
    </StoryPropVariant>
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

export const withBorder = () => (
  <React.Fragment>
    <StoryPropVariant propName="withBorder" propValue={false}>
      <NumberBadge tone={`SUCCESS`}>80</NumberBadge>
    </StoryPropVariant>
    <StoryPropVariant propName="withBorder" propValue={true}>
      <NumberBadge tone={`SUCCESS`} withBorder={true}>
        80
      </NumberBadge>
    </StoryPropVariant>
  </React.Fragment>
)

Tones.story = {
  decorators: [withVariationsContainer],
}
