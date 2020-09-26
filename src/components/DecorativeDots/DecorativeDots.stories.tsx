import * as React from "react"

import { number } from "@storybook/addon-knobs"
import { DecorativeDots } from "./"
import isChromatic from "storybook-chromatic/isChromatic"

export default {
  title: `DecorativeDots`,
  component: DecorativeDots,
}

export const Basic = () => (
  <DecorativeDots
    width={300}
    height={300}
    dotSize={20}
    __random={isChromatic() ? () => 0.65 : undefined}
    __sample={isChromatic() ? values => values[1] : undefined}
  />
)

export const Sandbox = () => (
  <DecorativeDots
    width={number(`width`, 300)}
    height={number(`height`, 200)}
    dotSize={number(`dotSize`, 20, {
      range: true,
      min: 4,
      max: 40,
      step: 1,
    })}
    angle={number(`angle`, 0, { range: true, min: 0, max: 360, step: 1 })}
    fadeStrength={number(`fadeStrength`, 0.25, {
      range: true,
      min: 0,
      max: 0.5,
      step: 0.01,
    })}
  />
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
