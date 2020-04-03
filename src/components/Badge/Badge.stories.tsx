/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"

import { MdFlashOn } from "react-icons/md"
import { StoryUtils } from "../../utils/storybook"
import { Badge, BadgeVariant } from "."
import { radioKnobOptions } from "../../utils/storybook/knobs"

export default {
  title: `Badge`,
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
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

export const WithIcon = () => (
  <Badge>
    Badge <MdFlashOn />
  </Badge>
)
