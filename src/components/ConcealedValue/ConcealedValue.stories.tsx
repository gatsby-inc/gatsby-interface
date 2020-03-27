/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text, boolean, number } from "@storybook/addon-knobs"
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

export const Basic = () => <ConcealedValue value="abcde" ariaLabel="value" />

export const Sandbox = () => (
  <ConcealedValue
    value={text("concealed value", "Lorem ipsum")}
    delay={number("copy delay", 2000)}
    concealed={boolean("initially concealed", false)}
    ariaLabel={text("value label", "Lorem ipsum")}
  />
)
