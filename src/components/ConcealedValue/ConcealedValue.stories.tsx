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
    value={text("The concealed string value:", "Lorem ipsum")}
    delay={number("Copy delay:", 2000)}
    concealed={boolean("Initially conceal value?", true)}
    ariaLabel={text("Label describing the value:", "Lorem ipsum")}
  />
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
