/** @jsx jsx */
import { jsx } from "@emotion/core"
import { radios, number } from "@storybook/addon-knobs"
import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import { NumberBadge, NumberBadgeTone } from "."
import { StoryPropVariant } from "../../utils/storybook/components"

export default {
  title: `NumberBadge`,
  component: NumberBadge,
}

export const Basic = () => <NumberBadge>8</NumberBadge>

const TONES: NumberBadgeTone[] = [`NEUTRAL`, `WARNING`, `DANGER`]

export const Sandbox = () => (
  <NumberBadge
    tone={radios(`tone`, radioKnobOptions<NumberBadgeTone>(TONES), `NEUTRAL`)}
  >
    {number("content", 8)}
  </NumberBadge>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

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
