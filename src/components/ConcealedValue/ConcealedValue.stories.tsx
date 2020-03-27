/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text } from "@storybook/addon-knobs"
import { StoryUtils } from "../../utils/storybook"
import { ConcealedValue } from "./"

export default {
  title: `ConcealedValue`,
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
}

export const Basic = () => <ConcealedValue value="abcde" />

export const Sandbox = () => (
  <ConcealedValue value={text("concealed value", "Lorem ispum")} />
)
