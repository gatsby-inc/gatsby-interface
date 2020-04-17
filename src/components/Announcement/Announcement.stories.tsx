/** @jsx jsx */
import { jsx } from "@emotion/core"
import { text } from "@storybook/addon-knobs"

import { Announcement } from "."

export default {
  title: `Announcement`,
  component: Announcement,
}

export const Basic = () => (
  <Announcement>
    We are working on adding more integrations all the time—watch your inbox!
  </Announcement>
)

export const Sandbox = () => (
  <Announcement>{text("content", "Lorem ispum")}</Announcement>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
