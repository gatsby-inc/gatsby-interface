/** @jsx jsx */
import { jsx } from "@emotion/core"
import { MdSync } from "react-icons/md"
import { BaseButton } from "./"
import { text, boolean } from "@storybook/addon-knobs"

export default {
  title: `BaseButton`,
  component: BaseButton,
}

export const Basic = () => <BaseButton>Button</BaseButton>

export const Sandbox = () => (
  <BaseButton
    loading={boolean(`loading`, true)}
    loadingLabel={text(`loadingLabel`, `Loading...`)}
    LoadingIcon={boolean(`show LoadingIcon`, true) ? MdSync : undefined}
  >
    {text("button label", "Click me!")}
  </BaseButton>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const WithLoadingState = () => (
  <BaseButton loading={true} loadingLabel="Loading..." LoadingIcon={MdSync}>
    Button
  </BaseButton>
)
