/** @jsx jsx */
import { jsx } from "@emotion/core"
import { text, radios } from "@storybook/addon-knobs"

import { MdFlashOn } from "react-icons/md"
import { Badge, BadgeVariant } from "."
import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"

export default {
  title: `Badge`,
  component: Badge,
}

export const Basic = () => <Badge>Badge</Badge>

const VARIANTS: BadgeVariant[] = [`STATUS`, `PILL`]

export const Sandbox = () => (
  <Badge
    variant={radios(
      `variant`,
      radioKnobOptions<BadgeVariant>(VARIANTS),
      `STATUS`
    )}
  >
    {text("badge text", "Lorem ispum")}
  </Badge>
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

export const WithIcon = () => (
  <Badge>
    Badge <MdFlashOn />
  </Badge>
)
