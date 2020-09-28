/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Meta } from "@storybook/react"
import { BaseAnchor } from "."

export default {
  title: `BaseAnchor`,
  component: BaseAnchor,
  parameters: {
    chromatic: { disable: true },
  },
} as Meta

export const Basic = () => (
  <BaseAnchor href="https://gatsbyjs.com" target="_blank">
    Anchor
  </BaseAnchor>
)
