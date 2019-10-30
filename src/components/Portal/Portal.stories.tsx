import React from "react"
import { storiesOf } from "@storybook/react"
import Portal from "./"
import README from "./README.md"
import { text } from "@storybook/addon-knobs"

storiesOf(`Portal`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`Default`, () => (
    <Portal>
      <div>This is portaled somewhere else</div>
    </Portal>
  ))
  .add(`Nesting portal`, () => (
    <Portal tag={text(`DOM element)`, `other-node`)}>
      <div>This is the parent portal</div>
      <Portal>
        <div>This is the child portal</div>
      </Portal>
    </Portal>
  ))
