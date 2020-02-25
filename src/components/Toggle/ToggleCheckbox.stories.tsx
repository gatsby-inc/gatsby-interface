/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { DecoratorFn } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"

import { ToggleCheckbox, ToggleCheckboxProps } from "./"
import { radioKnobOptions } from "../../utils/storybook/knobs"
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
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
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

export const Tones = () =>
  TOGGLE_TONES.map(tone => (
    <ToggleCheckbox
      id={`tone--${tone}`}
      label={`${tone} tone`}
      tone={tone}
      defaultChecked
    />
  ))

export const LabelPositions = () =>
  TOGGLE_LABEL_POSITIONS.map(labelPosition => (
    <ToggleCheckbox
      id={`labelPosition--${labelPosition}`}
      label={`Label position: ${labelPosition}`}
      labelPosition={labelPosition}
    />
  ))

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
