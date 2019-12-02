import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean, radios } from "@storybook/addon-knobs"
import { TextInput } from "./"
import { StoryUtils } from "../../utils/storybook"

const variants = {
  Default: `DEFAULT`,
  Secondary: `SECONDARY`,
}

storiesOf(`TextInput`, module).add(
  `Default`,
  () => (
    <StoryUtils.Container>
      <TextInput
        variant={radios(`variant`, variants, `DEFAULT`)}
        placeholder={text(`Placeholder`, `Placeholder text`)}
        type="text"
        disabled={boolean(`Disabled`, false)}
      />
    </StoryUtils.Container>
  ),
  {
    info: {
      text: `
          Text inputs allow the user to input data.
        `,
    },
  }
)
