import * as React from "react"
import { number, text } from "@storybook/addon-knobs"
import { CopyButton } from "./"
import { action } from "@storybook/addon-actions"

export default {
  title: `CopyButton`,
  component: CopyButton,
}

export const Basic = () => <CopyButton content="Hello world!" />

export const Sandbox = () => {
  const labelCopy = text(`Label (default)`, `Copy`)
  const labelCopied = text(`Label (copied)`, `Copied!`)
  const titleCopy = text(`Title (default)`, `Copy content`)
  const titleCopied = text(`Label (copied)`, `Content copied!`)

  return (
    <CopyButton
      content={text(`content`, `Hello world!`)}
      onClick={action(`Copy`)}
      getButtonLabel={copied => (copied ? labelCopied : labelCopy)}
      getButtonTitle={copied => (copied ? titleCopied : titleCopy)}
      delay={number("delay", 5000)}
    />
  )
}

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
