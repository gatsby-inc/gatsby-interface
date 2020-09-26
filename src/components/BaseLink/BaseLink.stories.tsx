/** @jsx jsx */
import { jsx } from "@emotion/core"
import { BaseLink } from "./"

export default {
  title: `BaseLink`,
  component: BaseLink,
  parameters: {
    chromatic: { disable: true },
  },
}

export const Basic = () => <BaseLink to="/">Link</BaseLink>
