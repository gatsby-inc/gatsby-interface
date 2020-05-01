/** @jsx jsx */
import { jsx } from "@emotion/core"
import { number } from "@storybook/addon-knobs"
import { NumberBadge } from "."

export default {
  title: `NumberBadge`,
  component: NumberBadge,
}

export const Basic = () => <NumberBadge>8</NumberBadge>

export const Sandbox = () => <NumberBadge>{number("content", 8)}</NumberBadge>

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
