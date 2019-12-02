import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"
import { StoryUtils } from "../../utils/storybook"
import { CopyButton } from "./"
import README from "./README.md"
import { action } from "@storybook/addon-actions"

storiesOf(`CopyButton`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
      includePropTables: [CopyButton],
    },
  })
  .add(`Default`, () => {
    const labelCopy = text(`Label (default)`, `Copy`)
    const labelCopied = text(`Label (copied)`, `Copied!`)
    const titleCopy = text(`Title (default)`, `Copy content`)
    const titleCopied = text(`Label (copied)`, `Content copied!`)

    return (
      <StoryUtils.Container>
        <CopyButton
          content={text(`content`, `Hello world!`)}
          onClick={action(`Copy`)}
          getButtonLabel={copied => (copied ? labelCopied : labelCopy)}
          getButtonTitle={copied => (copied ? titleCopied : titleCopy)}
        />
      </StoryUtils.Container>
    )
  })
