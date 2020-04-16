/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import { radios, text } from "@storybook/addon-knobs"
import { Theme } from "../../theme"
import { ToggleSwitch, ToggleSwitchProps } from "."

const TOGGLE_TONES: ToggleSwitchProps["tone"][] = [
  `BRAND`,
  `SUCCESS`,
  `DANGER`,
  `WARNING`,
  `NEUTRAL`,
]

const toggleToneOptions = radioKnobOptions(TOGGLE_TONES)

export default {
  title: `ToggleSwitch`,
  component: ToggleSwitch,
}

const ToggleSwitchStory = ({
  id = `toggleSwitch`,
  name = id,
  debug,
  ...props
}: Partial<ToggleSwitchProps> & { debug?: boolean }) => {
  const [value, setValue] = React.useState<string>(props.value || "off")

  return (
    <React.Fragment>
      <ToggleSwitch
        id={id}
        name={name}
        valueOn="on"
        valueOff="off"
        labelOn="Monthly"
        labelOff="Yearly"
        onChange={e => setValue(e.target.value)}
        {...props}
        value={value}
      />
      {debug && (
        <p
          css={(theme: Theme) => ({
            fontFamily: theme.fonts.monospace,
            padding: theme.space[3],
            background: theme.colors.grey[10],
            fontSize: theme.fontSizes[1],
          })}
        >
          {JSON.stringify({ value })}
        </p>
      )}
    </React.Fragment>
  )
}

export const Basic = () => <ToggleSwitchStory />

export const Sandbox = () => {
  const valueOff = text("valueOff", "yearly")
  return (
    <ToggleSwitchStory
      labelOn={text("labelOn", "Monthly")}
      labelOff={text("labelOff", "Yearly")}
      valueOn={text("valueOn", "monthly")}
      valueOff={valueOff}
      value={valueOff}
      tone={radios("tone", toggleToneOptions, `BRAND`)}
      debug
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Tones = () =>
  TOGGLE_TONES.map(tone => (
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
      <ToggleSwitchStory
        id={`tone--${tone}`}
        tone={tone}
        value="on"
        aria-describedby={`toggleSwitchLabel--${tone}`}
      />
    </div>
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

export const WithAccessibleFieldLabel = () => (
  <div>
    <p id="toggleSwitchLabel">Billing period:</p>
    <ToggleSwitchStory id="toggleSwitch" aria-describedby="toggleSwitchLabel" />
  </div>
)

export const WithRichLabels = () => (
  <ToggleSwitchStory
    labelOn={
      <div>
        ON
        <br />
        <small css={(theme: Theme) => ({ color: theme.colors.grey[50] })}>
          This is a rich label
        </small>
      </div>
    }
    labelOff={
      <div>
        OFF
        <br />
        <small css={(theme: Theme) => ({ color: theme.colors.grey[50] })}>
          This is a rich label
        </small>
      </div>
    }
  />
)
