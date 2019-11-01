import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { Modal, ModalType } from "./Modal"
import { withKnobs, boolean, select } from "@storybook/addon-knobs"
import { ModalFullScreen, ModalCard, ModalPanel } from "./"
import { PanelPosition } from "./ModalPanel"

const label = `Type`
const options = {
  success: `success`,
  info: `info`,
  warn: `warn`,
  error: `error`,
}

storiesOf(`Modal`, module)
  .addDecorator(withKnobs)
  .add(`Card`, () => (
    <Modal
      type={select(label, options, `info`) as ModalType}
      aria-label="Some impressive content"
      isOpen={boolean(`Is opened?`, true)}
      onDismiss={() => console.log(`Dismissed!`)}
    >
      <ModalCard>
        <div>Hello world</div>
      </ModalCard>
    </Modal>
  ))
  .add(`Panel`, () => {
    const positionLabel = `Position`
    const positionOptions = {
      left: `left`,
      right: `right`,
    }

    return (
      <Modal
        type={select(label, options, `info`) as ModalType}
        aria-label="Some impressive content"
        isOpen={boolean(`Is opened?`, true)}
        onDismiss={() => console.log(`Dismissed!`)}
      >
        <ModalPanel
          position={
            select(positionLabel, positionOptions, `left`) as PanelPosition
          }
        >
          <div>Hello world</div>
        </ModalPanel>
      </Modal>
    )
  })
  .add(`Fullscreen`, () => (
    <Modal
      type={select(label, options, `info`) as any}
      aria-label="Some impressive content"
      isOpen={boolean(`Is opened?`, true)}
      onDismiss={() => console.log(`Dismissed!`)}
    >
      <ModalFullScreen>
        <div>Hello world</div>
      </ModalFullScreen>
    </Modal>
  ))
  .add(`Nesting modal`, () => <NestedExample />)

const NestedExample = () => {
  const [isParentOpened, setParent] = useState(false)
  const [isChildrenOpened, setChildren] = useState(false)

  return (
    <div>
      <button onClick={() => setParent(true)}>Show parent</button>
      <Modal
        type={select(label, options, `info`) as any}
        aria-label="Some impressive content"
        isOpen={isParentOpened}
        onDismiss={() => console.log(`Dismissed!`)}
      >
        <ModalFullScreen>
          <div>Parent modal</div>
          <div>
            <button onClick={() => setChildren(true)}>Show children</button>

            <Modal
              aria-label="Some impressive content"
              isOpen={isChildrenOpened}
              onDismiss={() => console.log(`Dismissed!`)}
            >
              <ModalCard>
                <div>Children modal</div>
              </ModalCard>
            </Modal>
          </div>
        </ModalFullScreen>
      </Modal>
    </div>
  )
}
