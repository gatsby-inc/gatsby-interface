import React from "react"
import { storiesOf } from "@storybook/react"
import Portal from "./"
import README from "./README.md"
import { text } from "@storybook/addon-knobs"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

const Toast = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border-radius: 3px;
  color: white;
  background: #272727;
  margin: 0.2rem;
`

storiesOf(`Portal`, module)
  .addDecorator(storyFn => (
    <div>
      <Global
        styles={css`
          toast-container {
            position: fixed;
            right: 0;
            bottom: 0;
          }
        `}
      />
      {storyFn()}
    </div>
  ))
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
  .add(`Same destination portal`, () => (
    <Portal tag="toast-node" target="toast-container">
      <Toast>Parent toast</Toast>
      <Portal tag="toast-node" target="toast-container">
        <Toast>Child toast</Toast>
      </Portal>
    </Portal>
  ))
