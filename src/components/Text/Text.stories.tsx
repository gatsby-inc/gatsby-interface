/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { StoryUtils, withVariationsContainer } from "../../utils/storybook"
import { Text, TextProps, TextSize, TextTone, TextVariant } from "."

export default {
  title: `Text`,
  component: Text,
} as Meta

const Template: Story<TextProps> = args => <Text {...args} />

export const Basic = Template.bind({})

Basic.args = {
  children:
    "Doggo ipsum mlem snoot adorable doggo you are doing me the shock doge, mlem puggo boofers. Blep shoober heckin good boys smol, ruff thicc, dattungg tho shooberino.",
}

const VARIANTS: TextVariant[] = [
  "PRIMARY",
  "EMPHASIZED",
  "LEDE",
  "EMPHASIZED_LEDE",
  "ERROR",
]
const TONES: TextTone[] = [`NEUTRAL`, `BRAND`]
const SIZES: TextSize[] = [`S`, `M`, `L`, `XL`, `2XL`]

export const WithAsProp = Template.bind({})

WithAsProp.args = {
  as: `span`,
  children: <React.Fragment>Text rendered as &lt;span&gt; tag</React.Fragment>,
}

WithAsProp.storyName = `With "as" prop`

export const Variants = () =>
  VARIANTS.map(variant => (
    <Text key={variant} variant={variant}>
      Text variant: {variant} {variant === `PRIMARY` && <StoryUtils.Default />}
      <br />
      Doggo ipsum mlem snoot adorable doggo you are doing me the shock doge,
      mlem puggo boofers. Blep shoober heckin good boys smol, ruff thicc, dat
      tungg tho shooberino.
    </Text>
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}

export const Tones = () =>
  TONES.map(tone => (
    <Text key={tone} tone={tone}>
      Text tone: {tone} {tone === `NEUTRAL` && <StoryUtils.Default />}
      <br />
      Doggo ipsum mlem snoot adorable doggo you are doing me the shock doge,
      mlem puggo boofers. Blep shoober heckin good boys smol, ruff thicc, dat
      tungg tho shooberino.
    </Text>
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

export const Sizes = () =>
  SIZES.map(size => (
    <Text key={size} size={size}>
      Text size: {size} {size === `M` && <StoryUtils.Default />}
      <br />
      Doggo ipsum mlem snoot adorable doggo you are doing me the shock doge,
      mlem puggo boofers. Blep shoober heckin good boys smol, ruff thicc, dat
      tungg tho shooberino.
    </Text>
  ))

Sizes.story = {
  decorators: [withVariationsContainer],
}
