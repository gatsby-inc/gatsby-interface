/** @jsx jsx */
import { jsx } from "@emotion/core"
import { radios, select, text } from "@storybook/addon-knobs"
import {
  radioKnobOptions,
  StoryUtils,
  withVariationsContainer,
} from "../../utils/storybook"
import Text from "./Text"
import { TextSize, TextTone, TextVariant } from "./types"

export default {
  title: `Text`,
  component: Text,
}

export const Basic = () => (
  <Text>
    Doggo ipsum mlem snoot adorable doggo you are doing me the shock doge, mlem
    puggo boofers. Blep shoober heckin good boys smol, ruff thicc, dat tungg tho
    shooberino.
  </Text>
)

const VARIANTS: TextVariant[] = [
  "PRIMARY",
  "EMPHASIZED",
  "LEDE",
  "EMPHASIZED_LEDE",
  "ERROR",
]
const TONES: TextTone[] = [`NEUTRAL`, `BRAND`]
const SIZES: TextSize[] = [`S`, `M`, `L`, `XL`, `2XL`]

export const Sandbox = () => (
  <Text
    as={select(`as`, ["span", `p`], `p`)}
    variant={radios(`variant`, radioKnobOptions(VARIANTS), `PRIMARY`)}
    tone={radios(`tone`, radioKnobOptions(TONES), `NEUTRAL`)}
    size={radios(`size`, radioKnobOptions(SIZES), `M`)}
  >
    {text(
      "content",
      "Doggo ipsum mlem snoot adorable doggo you are doing me the shock doge, mlem puggo boofers. Blep shoober heckin good boys smol, ruff thicc, dat tungg tho shooberino."
    )}
  </Text>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const WithAsProp = () => (
  <Text as={`span`}>Text rendered as &lt;span&gt; tag</Text>
)

WithAsProp.story = {
  name: `With "as" prop`,
}

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
