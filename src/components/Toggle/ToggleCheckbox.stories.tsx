/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { ToggleCheckbox, ToggleCheckboxProps } from "./"
import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import { radios, text } from "@storybook/addon-knobs"
import { Theme } from "../../theme"

const TOGGLE_TONES: ToggleCheckboxProps["tone"][] = [
  `BRAND`,
  `SUCCESS`,
  `DANGER`,
  `WARNING`,
  `NEUTRAL`,
]

const TOGGLE_LABEL_POSITIONS: ToggleCheckboxProps["labelPosition"][] = [
  `end`,
  `start`,
]

const toggleToneOptions = radioKnobOptions(TOGGLE_TONES)

const toggleLabelPositionOptions = radioKnobOptions(TOGGLE_LABEL_POSITIONS)

export default {
  title: `ToggleCheckbox`,
  component: ToggleCheckbox,
}

export const Basic = () => (
  <ToggleCheckbox id="toggleCheckbox" label="Behaves like a checkbox" />
)

export const Sandbox = () => (
  <ToggleCheckbox
    id="toggleCheckbox"
    label={text("label", "Subscribe")}
    tone={radios("tone", toggleToneOptions, `BRAND`)}
    labelPosition={radios("labelPosition", toggleLabelPositionOptions, `end`)}
  />
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Tones = () =>
  TOGGLE_TONES.map(tone => (
    <ToggleCheckbox
      id={`tone--${tone}`}
      label={`${tone} tone`}
      tone={tone}
      defaultChecked
    />
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

export const LabelPositions = () =>
  TOGGLE_LABEL_POSITIONS.map(labelPosition => (
    <ToggleCheckbox
      id={`labelPosition--${labelPosition}`}
      label={`Label position: ${labelPosition}`}
      labelPosition={labelPosition}
    />
  ))

LabelPositions.story = {
  decorators: [withVariationsContainer],
}

export const WithRichLabel = () => (
  <ToggleCheckbox
    id="toggleCheckbox"
    label={
      <div>
        This is a rich label
        <br />
        <small css={(theme: Theme) => ({ color: theme.colors.grey[50] })}>
          Some styled text
        </small>
      </div>
    }
  />
)

export const Controlled = () => {
  const [checked, setChecked] = React.useState(false)

  return (
    <ToggleCheckbox
      id="toggleCheckbox"
      label={`Controlled value: ${JSON.stringify(checked)}`}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}
