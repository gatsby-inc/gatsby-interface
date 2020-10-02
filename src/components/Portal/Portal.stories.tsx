import * as React from "react"
import { Meta } from "@storybook/react"
import Portal from "./"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

export default {
  title: `Portal`,
  component: Portal,
  decorators: [
    storyFn => (
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
    ),
  ],
} as Meta

const Toast = styled.div(_props => ({
  padding: "0.5rem 1rem",
  borderRadius: "3px",
  color: "white",
  background: "#272727",
  margin: "0.2rem",
}))

export const Basic = () => (
  <Portal>
    <div>This is portaled somewhere else</div>
  </Portal>
)

export const NestedPortal = () => (
  <Portal tag="other-node">
    <div>This is the parent portal</div>
    <Portal>
      <div>This is the child portal</div>
    </Portal>
  </Portal>
)

export const SameDestination = () => (
  <Portal tag="toast-node" target="toast-container">
    <Toast>Parent toast</Toast>
    <Portal tag="toast-node" target="toast-container">
      <Toast>Child toast</Toast>
    </Portal>
  </Portal>
)
