/** @jsx jsx */
import { jsx } from "@emotion/core"
import { text, boolean, number } from "@storybook/addon-knobs"
import { ConcealedValue } from "./"

export default {
  title: `ConcealedValue`,
  component: ConcealedValue,
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
