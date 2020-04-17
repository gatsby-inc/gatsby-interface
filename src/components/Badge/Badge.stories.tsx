/** @jsx jsx */
import { jsx } from "@emotion/core"
import { text, radios, boolean } from "@storybook/addon-knobs"
import { DecoratorFn } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { MdSettingsEthernet } from "react-icons/md"

import { Badge } from "."
import { BadgeVariant, BadgeTone, BadgeTextVariant, BadgeSize } from "./types"
import {
  radioKnobOptions,
  withVariationsContainer,
  sandboxWithPropVariations,
} from "../../utils/storybook"

export default {
  title: `Badge`,
  component: Badge,
  decorators: [withDesign] as DecoratorFn[],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/KTlXv0iPoiPZ0o2O2e1x1Aqa/Badges?node-id=57%3A51",
    },
  },
}

export const Basic = () => <Badge>Badge</Badge>

const VARIANTS: BadgeVariant[] = [`STATUS`, `PILL`]

const TONES: BadgeTone[] = [`BRAND`, `SUCCESS`, `DANGER`, `WARNING`, `NEUTRAL`]

const TEXT_VARIANTS: BadgeTextVariant[] = [`DEFAULT`, `CAPS`]

const SIZES: BadgeSize[] = [`M`, `S`]

export const Sandbox = () =>
  sandboxWithPropVariations(
    propVariations => (
      <Badge
        variant={radios(
          `variant`,
          radioKnobOptions<BadgeVariant>(VARIANTS),
          `STATUS`
        )}
        tone={radios("tone", radioKnobOptions<BadgeTone>(TONES), `BRAND`)}
        textVariant={radios(
          "text",
          radioKnobOptions<BadgeTextVariant>(TEXT_VARIANTS),
          `DEFAULT`
        )}
        size={radios("size", radioKnobOptions<BadgeSize>(SIZES), `M`)}
        Icon={boolean("withIcon", true) ? MdSettingsEthernet : undefined}
        {...propVariations}
      >
        {text("badge text", "Badge")}
      </Badge>
    ),
    {
      variant: VARIANTS,
      tone: TONES,
      size: SIZES,
    }
  )

Sandbox.story = {
  decorators: [withVariationsContainer],
  parameters: {
    chromatic: { disable: true },
  },
}

export const Variants = () =>
  VARIANTS.map(variant => (
    <Badge key={variant} variant={variant}>
      Variant: {variant}
    </Badge>
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}

export const Tones = () =>
  TONES.map(tone => (
    <Badge key={tone} tone={tone}>
      Tone: {tone}
    </Badge>
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

export const TextVariants = () =>
  TEXT_VARIANTS.map(textVariant => (
    <Badge key={textVariant} textVariant={textVariant}>
      Text Variant: {textVariant}
    </Badge>
  ))

TextVariants.story = {
  decorators: [withVariationsContainer],
}

export const Sizes = () =>
  SIZES.map(size => (
    <Badge key={size} size={size}>
      Size: {size}
    </Badge>
  ))

Sizes.story = {
  decorators: [withVariationsContainer],
}

export const WithIcon = () => <Badge Icon={MdSettingsEthernet}>Badge</Badge>
