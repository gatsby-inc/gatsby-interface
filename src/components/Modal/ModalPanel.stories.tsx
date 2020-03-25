import React from "react"
import { Modal } from "./Modal"
import { text, radios } from "@storybook/addon-knobs"
import { ModalPanel, ModalPanelPosition } from "./"
import { radioKnobOptions } from "../../utils/storybook"

const POSITIONS: ModalPanelPosition[] = ["left", "right"]

export default {
  title: `Modal/ModalPanel`,
  component: ModalPanel,
}

export const Basic = () => (
  <Modal aria-label="Some impressive content" isOpen>
    <ModalPanel>Hello world</ModalPanel>
  </Modal>
)

export const Sandbox = () => (
  <Modal aria-label="Some impressive content" isOpen>
    <ModalPanel
      position={radios("position", radioKnobOptions(POSITIONS), "right")}
      maxWidth={text("maxWidth", "20%")}
    >
      {text("content", "Hello world")}
    </ModalPanel>
  </Modal>
)
