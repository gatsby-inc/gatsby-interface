import React from "react"

import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"

import { Text } from "../src/components/Text"

const variants = {
  Default: `DEFAULT`,
  Danger: `DANGER`,
}

storiesOf(`Text`, module)
  .add(
    `Default`,
    () => <Text variant={radios(`variant`, variants, `DEFAULT`)}>Text</Text>,
    {
      info: {
        text: `
          Text can be used to display informationi on a page or sectioin.
        `,
      },
    }
  )
  .add(`Text with strong tag`, () => (
    <Text>
      <strong>Text</strong>
    </Text>
  ))
