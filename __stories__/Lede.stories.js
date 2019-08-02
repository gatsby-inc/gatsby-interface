import React from "react"

import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"

import { Lede } from "../src/components/Lede"

const variants = {
  Default: `DEFAULT`,
  Emphatic: `EMPHATIC`,
}

storiesOf(`Lede`, module).add(
  `Default`,
  () => <Lede variant={radios(`variant`, variants, `DEFAULT`)}>Lede</Lede>,
  {
    info: {
      text: `
          Lede is text that is the opening sentence or paragraph of a page or section.
        `,
    },
  }
)
