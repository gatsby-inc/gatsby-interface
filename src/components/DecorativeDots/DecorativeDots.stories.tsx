import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { DecorativeDots, DecorativeDotsProps } from "./"
import isChromatic from "storybook-chromatic/isChromatic"

export default {
  title: `DecorativeDots`,
  component: DecorativeDots,
  argTypes: {
    dotSize: {
      control: {
        type: "range",
        min: 4,
        max: 40,
        step: 1,
      },
    },
    fadeStrength: {
      control: {
        type: "range",
        min: 0,
        max: 0.5,
        step: 0.01,
      },
    },
    angle: {
      control: {
        type: `range`,
        min: 0,
        max: 360,
        step: 1,
      },
    },
    __random: {
      control: {
        disable: true,
      },
    },
    __sample: {
      control: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<DecorativeDotsProps> = args => (
  <DecorativeDots
    {...args}
    __random={isChromatic() ? () => 0.65 : undefined}
    __sample={isChromatic() ? values => values[1] : undefined}
  />
)

export const Basic = Template.bind({})

Basic.args = {
  width: 300,
  height: 300,
  dotSize: 20,
}
