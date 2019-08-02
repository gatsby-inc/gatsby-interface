import React from "react"

import { storiesOf } from "@storybook/react"
import { text, boolean, radios } from "@storybook/addon-knobs"

import { TextInput } from "../src/components/TextInput"

const variants = {
  Default: `DEFAULT`,
  Search: `SEARCH`,
}

storiesOf(`TextInput`, module).add(
  `Default`,
  () => (
    <TextInput
      variant={radios(`variant`, variants, `DEFAULT`)}
      placeholder={text(`Placeholder`, `Placeholder text`)}
      type="text"
      disabled={boolean(`Disabled`, false)}
    />
  ),
  {
    info: {
      text: `
          Text inputs allow the user to input data.
        `,
    },
  }
)
