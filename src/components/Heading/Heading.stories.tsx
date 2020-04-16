/** @jsx jsx */
import { jsx } from "@emotion/core"
import { select, text, radios } from "@storybook/addon-knobs"

import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import { Heading, HeadingTone, HeadingVariant } from "."

export default {
  title: `Heading`,
  component: Heading,
}

export const Basic = () => (
  <Heading>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
)

const TONES: HeadingTone[] = ["BRAND", "SUCCESS", "DANGER", "NEUTRAL"]
const VARIANTS: HeadingVariant[] = ["PRIMARY", `EMPHASIZED`, `LIGHT`]

export const Sandbox = () => (
  <Heading
    as={select(
      "HTML element",
      ["h1", "h2", "h3", "h4", "h5", "h6", "span"],
      `h2`
    )}
    tone={radios(`tone`, radioKnobOptions(TONES), `NEUTRAL`)}
    variant={radios(`variant`, radioKnobOptions(VARIANTS), `PRIMARY`)}
  >
    {text(
      "content",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    )}
  </Heading>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Tones = () =>
  TONES.map(tone => (
    <Heading key={tone} tone={tone}>
      Tone: {tone}
    </Heading>
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

export const Variants = () =>
  VARIANTS.map(variant => (
    <Heading key={variant} variant={variant}>
      Variant: {variant}
    </Heading>
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}
