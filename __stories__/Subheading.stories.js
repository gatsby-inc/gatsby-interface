import React from "react"

import { storiesOf } from "@storybook/react"

import { Subheading } from "../src/components/Subheading"

storiesOf(`Subheading`, module)
  .add(`Default`, () => <Subheading>Subheading</Subheading>, {
    info: {
      text: `
          Subheading is text that can be a sub heading of a page or section.
        `,
    },
  })
  .add(`Subheading with small tag`, () => (
    <Subheading>
      <small>Subheading</small>
    </Subheading>
  ))
