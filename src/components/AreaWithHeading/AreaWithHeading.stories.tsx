/** @jsx jsx */
import { jsx } from "@emotion/core"
import { text } from "@storybook/addon-knobs"
import { AreaWithHeading } from "."

export default {
  title: `AreaWithHeading`,
  component: AreaWithHeading,
}

export const Basic = () => <AreaWithHeading>Hello world!</AreaWithHeading>

export const Sandbox = () => (
  <AreaWithHeading>{text("content", "Hello world!")}</AreaWithHeading>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
