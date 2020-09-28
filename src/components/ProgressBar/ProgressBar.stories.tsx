/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { number } from "@storybook/addon-knobs"
import { ProgressBar } from "./ProgressBar"
import { Theme } from "../../theme"
import { withVariationsContainer } from "../../utils/storybook"
import { DecoratorFn } from "@storybook/react"

export default {
  title: `ProgressBar`,
  component: ProgressBar,
  parameters: {
    componentSubtitle:
      "Progress Bars express a specified or unspecified time or display the length of a process.",
    layout: "padded",
  },
  decorators: [
    (story => <div css={{ width: "100px" }}>{story()}</div>) as DecoratorFn,
  ],
}

export const Basic = () => (
  <ProgressBar value={3} max={14} aria-describedby="remaining-days-1" />
)

export const Sandbox = () => {
  const value = number("Current value", 11)

  return (
    <ProgressBar
      value={value}
      max={number("Max value", 14)}
      aria-describedby="remaining-days-4"
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

const VALUES: number[] = [3, 8, 11, 14]

export const DefaultColors = () =>
  VALUES.map(value => (
    <ProgressBar
      key={value}
      value={value}
      max={14}
      aria-describedby={`remaining-days-${value}`}
    />
  ))

DefaultColors.story = {
  decorators: [withVariationsContainer],
}

export const CustomColors = () => {
  const getProgressColor = (theme: Theme, progression: number) => {
    if (progression < 50) {
      return theme.colors.blue[50]
    }

    return theme.colors.red[50]
  }

  return (
    <React.Fragment>
      <ProgressBar
        value={3}
        max={14}
        aria-describedby="remaining-days-1"
        getProgressColor={getProgressColor}
      />

      <ProgressBar
        value={8}
        max={14}
        aria-describedby="remaining-days-2"
        getProgressColor={getProgressColor}
      />

      <ProgressBar
        value={11}
        max={14}
        aria-describedby="remaining-days-3"
        getProgressColor={getProgressColor}
      />
    </React.Fragment>
  )
}

CustomColors.story = {
  decorators: [withVariationsContainer],
}
