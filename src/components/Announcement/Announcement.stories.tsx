/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import { StoryUtils } from "../../utils/storybook"
import { Announcement } from "."

export default {
  title: `Announcement`,
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
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
