/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta, Story } from "@storybook/react"
import { withVariationsContainer } from "../../utils/storybook"
import { Heading, HeadingProps, HeadingTone, HeadingVariant } from "."
import { HeadingFontVariant } from "./types"

export default {
  title: `Heading`,
  component: Heading,
} as Meta

const Template: Story<HeadingProps> = args => <Heading {...args} />

export const Basic = Template.bind({})

Basic.args = {
  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}

const TONES: HeadingTone[] = ["BRAND", "SUCCESS", "DANGER", "NEUTRAL"]
const VARIANTS: HeadingVariant[] = ["PRIMARY", `EMPHASIZED`, `LIGHT`]
const FONT_VARIANTS: HeadingFontVariant[] = ["UI", "DISPLAY"]

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

export const FontVariants = () =>
  FONT_VARIANTS.map(fontVariant => (
    <Heading key={fontVariant} fontVariant={fontVariant}>
      Font Variant: {fontVariant}
    </Heading>
  ))

FontVariants.story = {
  decorators: [withVariationsContainer],
}
