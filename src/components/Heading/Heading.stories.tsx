/** @jsx jsx */
import { jsx } from "@emotion/core"
import { select, text, radios } from "@storybook/addon-knobs"

import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import { Heading, HeadingTone, HeadingVariant } from "."
import { AreaWithHeading } from "../AreaWithHeading"

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

export const AutomaticHeadingLevels = () => (
  <AreaWithHeading>
    <Heading>This should be H1</Heading>
    <section>
      <AreaWithHeading>
        <Heading>This should be H2</Heading>
        <section>
          <AreaWithHeading>
            <Heading>This should be H3</Heading>
            <section>
              <AreaWithHeading>
                <Heading>This should be H4</Heading>
                <section>
                  <AreaWithHeading>
                    <Heading>This should be H5</Heading>
                    <section>
                      <AreaWithHeading>
                        <Heading>This should be H6</Heading>
                      </AreaWithHeading>
                    </section>
                  </AreaWithHeading>
                </section>
              </AreaWithHeading>
            </section>
          </AreaWithHeading>
        </section>
        <section>
          <AreaWithHeading>
            <Heading>This should be H3</Heading>
            <section>
              <Heading as="span">Using "as" prop to override with SPAN</Heading>
            </section>
          </AreaWithHeading>
        </section>
      </AreaWithHeading>
    </section>
  </AreaWithHeading>
)
