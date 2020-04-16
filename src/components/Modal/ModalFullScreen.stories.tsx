import React from "react"
import { Modal } from "./Modal"
import { text } from "@storybook/addon-knobs"
import { ModalFullScreen } from "./"

export default {
  title: `Modal/ModalFullScreen`,
  component: ModalFullScreen,
  parameters: {
    options: {
      showRoots: true,
    },
  },
}

export const Basic = () => (
  <Modal aria-label="Some impressive content" isOpen>
    <ModalFullScreen>Hello world</ModalFullScreen>
  </Modal>
)

export const Sandbox = () => (
  <Modal aria-label="Some impressive content" isOpen>
    <ModalFullScreen>{text("content", "Hello world")}</ModalFullScreen>
  </Modal>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
