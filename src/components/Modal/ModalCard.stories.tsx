import React from "react"
import { Modal } from "./Modal"
import { text } from "@storybook/addon-knobs"
import { ModalCard } from "./"

export default {
  title: `Modal/ModalCard`,
  component: ModalCard,
  parameters: {
    chromatic: { pauseAnimationAtEnd: true },
    options: {
      showRoots: true,
    },
  },
}

export const Basic = () => (
  <Modal aria-label="Some impressive content" isOpen>
    <ModalCard>Hello world</ModalCard>
  </Modal>
)

export const Sandbox = () => (
  <Modal aria-label="Some impressive content" isOpen>
    <ModalCard>{text("content", "Hello world")}</ModalCard>
  </Modal>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}
