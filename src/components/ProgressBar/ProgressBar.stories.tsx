/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Theme } from "../../theme"
import { withVariationsContainer } from "../../utils/storybook"
import { ProgressBar, ProgressBarProps } from "."

export default {
  title: `ProgressBar`,
  component: ProgressBar,
  parameters: {
    componentSubtitle:
      "Progress Bars express a specified or unspecified time or display the length of a process.",
    layout: "padded",
  },
  decorators: [story => <div css={{ width: "100px" }}>{story()}</div>],
} as Meta

const Template: Story<ProgressBarProps> = args => <ProgressBar {...args} />

export const Basic = Template.bind({})

Basic.args = {
  value: 3,
  max: 14,
  "aria-describedby": "remaining-days-1",
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

export const CustomHeight = () => {
  return (
    <React.Fragment>
      <ProgressBar value={3} max={14} aria-describedby="remaining-days-1" />

      <ProgressBar
        value={8}
        max={14}
        height={10}
        aria-describedby="remaining-days-2"
      />

      <ProgressBar
        value={11}
        max={14}
        height={14}
        aria-describedby="remaining-days-3"
      />
    </React.Fragment>
  )
}

CustomHeight.story = {
  decorators: [withVariationsContainer],
}
