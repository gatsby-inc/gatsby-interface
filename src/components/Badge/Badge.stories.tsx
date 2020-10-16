/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { MdSettingsEthernet } from "react-icons/md"

import {
  Badge,
  BadgeProps,
  BadgeVariant,
  BadgeTone,
  BadgeTextVariant,
  BadgeSize,
} from "."
import { withVariationsContainer } from "../../utils/storybook"

export default {
  title: `Badge`,
  component: Badge,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "Badges, or labels, add metatdata or indicate the status of items and navigational elements.",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/KTlXv0iPoiPZ0o2O2e1x1Aqa/Badges?node-id=57%3A51",
    },
  },
  argTypes: {
    Icon: { control: { disable: true } },
  },
} as Meta

const Template: Story<BadgeProps> = args => <Badge {...args} />

export const Basic = Template.bind({})

Basic.args = { children: `Badge` }

const VARIANTS: BadgeVariant[] = [`STATUS`, `PILL`]

const TONES: BadgeTone[] = [`BRAND`, `SUCCESS`, `DANGER`, `WARNING`, `NEUTRAL`]

const TEXT_VARIANTS: BadgeTextVariant[] = [`DEFAULT`, `CAPS`]

const SIZES: BadgeSize[] = [`M`, `S`]

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
