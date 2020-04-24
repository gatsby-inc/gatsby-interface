/** @jsx jsx */
import { jsx } from "@emotion/core"
import { text, radios } from "@storybook/addon-knobs"

import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import { Link, LinkVariant } from "."

export default {
  title: `Link`,
  component: Link,
}

export const Basic = () => <Link to="/">Link</Link>

const VARIANTS: LinkVariant[] = ["DEFAULT", "SIMPLE"]

export const Sandbox = () => (
  <Link variant={radios(`variant`, radioKnobOptions(VARIANTS), `DEFAULT`)}>
    {text("content", "Link text")}
  </Link>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Variants = () =>
  VARIANTS.map(variant => (
    <Link key={variant} variant={variant}>
      Variant: {variant}
    </Link>
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}

export const ExternalLink = () => (
  <Link href="https://google.com">External Link</Link>
)
