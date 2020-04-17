/** @jsx jsx */
import { jsx } from "@emotion/core"
import { text, radios, boolean } from "@storybook/addon-knobs"
import { DecoratorFn } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { MdSettingsEthernet } from "react-icons/md"

import { Badge } from "."
import { BadgeVariant, BadgeTone, BadgeText, BadgeSize } from "./types"
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

const TEXTS: BadgeText[] = [`DEFAULT`, `CAPS`]

const SIZES: BadgeSize[] = [`MEDIUM`, `SMALL`]

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
        text={radios("text", radioKnobOptions<BadgeText>(TEXTS), `DEFAULT`)}
        size={radios("size", radioKnobOptions<BadgeSize>(SIZES), `MEDIUM`)}
        Icon={boolean("withIcon", true) ? MdSettingsEthernet : undefined}
        {...propVariations}
      >
        {text("badge text", "Badge")}
      </Badge>
    ),
    {
      variant: VARIANTS,
      tone: TONES,
    }
  )

Sandbox.story = {
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

export const WithIcon = () => <Badge Icon={MdSettingsEthernet}>Badge</Badge>
