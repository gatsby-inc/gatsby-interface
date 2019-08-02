import React from "react"

import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"

import { Heading } from "../src/components/Heading"

const variants = {
  Default: `DEFAULT`,
  Emphatic: `EMPHATIC`,
  Site: `SITE`,
}

storiesOf(`Heading`, module)
  .add(
    `Default`,
    () => (
      <Heading variant={radios(`variant`, variants, `DEFAULT`)}>
        Heading
      </Heading>
    ),
    {
      info: {
        text: `
          Heading is text that can be a heading of a page or section.
        `,
      },
    }
  )
  .add(`Heading with small tag`, () => (
    <Heading>
      <small>Heading</small>
    </Heading>
  ))
  .add(`Heading with strong tag`, () => (
    <Heading>
      <strong>Heading</strong>
    </Heading>
  ))
