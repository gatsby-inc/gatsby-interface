/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState } from "react"
import { boolean, text, radios } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import { Modal, ModalType, ModalCard, ModalPanel } from "./"
import { radioKnobOptions } from "../../utils/storybook"
import { Button } from "../Button"

const TYPES: ModalType[] = ["info", "success", "warn", "error"]

export default {
  title: `Modal`,
  component: ModalPanel,
  parameters: {
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
  <Modal
    aria-label={text(`aria-label`, "Some impressive content")}
    isOpen={boolean("isOpen", true)}
    type={radios("type", radioKnobOptions(TYPES), "info")}
  >
    <ModalCard>Hello world</ModalCard>
  </Modal>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Dismissable = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true)

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>

      <Modal
        aria-label="Some impressive content"
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
      >
        <ModalCard css={theme => ({ padding: theme.space[4] })}>
          You can close this modal by one of the following:
          <ul>
            <li>Click on the overlay</li>
            <li>Press ESC</li>
            <li>Click the buton below</li>
          </ul>
          <Button variant="SECONDARY" onClick={() => setIsOpen(false)}>
            Close modal
          </Button>
        </ModalCard>
      </Modal>
    </React.Fragment>
  )
}

export const InitialFocus = () => {
  const primaryButtonRef = React.useRef<HTMLButtonElement>(null)

  return (
    <React.Fragment>
      <Modal
        aria-label="Some impressive content"
        initialFocusRef={primaryButtonRef}
      >
        <ModalCard css={theme => ({ padding: theme.space[4] })}>
          The "Primary action" button should be focused when modal opens
          <br />
          <br />
          <Button
            variant="SECONDARY"
            onClick={action("secondary button click")}
          >
            Secondary action
          </Button>
          <Button
            variant="PRIMARY"
            onClick={action("primary button click")}
            ref={primaryButtonRef}
          >
            Primary action
          </Button>
        </ModalCard>
      </Modal>
    </React.Fragment>
  )
}

export const Nested = () => {
  const [isParentOpened, setParent] = useState(false)
  const [isChildrenOpened, setChildren] = useState(false)

  return (
    <div>
      <Button onClick={() => setParent(true)}>Show parent</Button>
      <Modal
        aria-label="Some impressive content"
        isOpen={isParentOpened}
        onDismiss={() => setParent(false)}
      >
        <ModalPanel>
          <div>Parent modal</div>
          <div>
            <Button variant="SECONDARY" onClick={() => setChildren(true)}>
              Show children
            </Button>

            <Modal
              aria-label="Some impressive children content"
              type="success"
              isOpen={isChildrenOpened}
              onDismiss={() => setChildren(false)}
            >
              <ModalCard>
                <div>Children modal</div>
              </ModalCard>
            </Modal>
          </div>
        </ModalPanel>
      </Modal>
    </div>
  )
}
