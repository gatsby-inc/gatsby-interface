/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Meta, Story } from "@storybook/react"

import { withVariationsContainer } from "../../utils/storybook"
import { Theme } from "../../theme"
import { ToggleSwitch, ToggleSwitchProps } from "."

const TONES: ToggleSwitchProps["tone"][] = [
  `BRAND`,
  `SUCCESS`,
  `DANGER`,
  `WARNING`,
  `NEUTRAL`,
]

export default {
  title: `ToggleSwitch`,
  component: ToggleSwitch,
  parameters: {
    componentSubtitle:
      "Switches can be used as an alternative to the Checkboxes, and switch between two states — usually enabled and disabled. A Switch must always be accompanied by a label, and follow the same keyboard workflow as a Checkbox.",
  },
  argTypes: {
    tone: {
      table: {
        type: {
          summary: TONES.map(tone => `"${tone}"`).join(` | `),
        },
        defaultValue: {
          summary: `BRAND`,
        },
      },
      control: {
        type: `select`,
        options: TONES,
      },
    },
  },
} as Meta

const Template: Story<ToggleSwitchProps> = ({ id, name = id, ...args }) => {
  const [value, setValue] = React.useState<string>(args.value || "off")

  return (
    <ToggleSwitch
      id={id}
      name={name}
      onChange={e => setValue(e.target.value)}
      {...args}
      value={value}
    />
  )
}

export const Basic = Template.bind({})

Basic.args = {
  id: "basic-switch",
  valueOn: "on",
  valueOff: "off",
  labelOn: "Monthly",
  labelOff: "Yearly",
}

export const Tones = () => {
  const [value, setValue] = React.useState<string>("on")

  return TONES.map(tone => (
    <div key={tone}>
      <p
        id={`toggleSwitchLabel--${tone}`}
        css={(theme: Theme) => ({
          marginBottom: theme.space[2],
          fontWeight: theme.fontWeights.bold,
        })}
      >
        {tone}:
      </p>
      <ToggleSwitch
        id={`tone--${tone}`}
        tone={tone}
        value={value}
        onChange={e => setValue(e.target.value)}
        valueOn="on"
        valueOff="off"
        labelOn="Monthly"
        labelOff="Yearly"
        aria-describedby={`toggleSwitchLabel--${tone}`}
      />
    </div>
  ))
}

Tones.story = {
  decorators: [withVariationsContainer],
}

export const WithAccessibleFieldLabel = () => {
  const [value, setValue] = React.useState<string>("off")

  return (
    <React.Fragment>
      <p id="toggleSwitchLabel">Billing period:</p>
      <ToggleSwitch
        id="toggleSwitch"
        value={value}
        onChange={e => setValue(e.target.value)}
        valueOn="on"
        valueOff="off"
        labelOn="Monthly"
        labelOff="Yearly"
        aria-describedby="toggleSwitchLabel"
      />
    </React.Fragment>
  )
}

export const WithRichLabels = Template.bind({})

WithRichLabels.args = {
  id: "rich-labels-switch",
  valueOn: "on",
  valueOff: "off",
  labelOn: (
    <div>
      ON
      <br />
      <small css={(theme: Theme) => ({ color: theme.colors.grey[50] })}>
        This is a rich label
      </small>
    </div>
  ),
  labelOff: (
    <div>
      OFF
      <br />
      <small css={(theme: Theme) => ({ color: theme.colors.grey[50] })}>
        This is a rich label
      </small>
    </div>
  ),
}
