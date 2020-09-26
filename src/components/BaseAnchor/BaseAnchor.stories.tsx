/** @jsx jsx */
import { jsx } from "@emotion/core"
import { BaseAnchor } from "."

export default {
  title: `BaseAnchor`,
  component: BaseAnchor,
  parameters: {
    chromatic: { disable: true },
  },
}

export const Basic = () => (
  <BaseAnchor href="https://gatsbyjs.com" target="_blank">
    Anchor
  </BaseAnchor>
)
