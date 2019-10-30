import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { Modal, ModalType } from "./Modal"
import { withKnobs, boolean, select, number } from "@storybook/addon-knobs"
import { ModalFullScreen, ModalCard, ModalPanel } from "./"

const label = `Type`
const options = {
  success: `success`,
  info: `info`,
  warn: `warn`,
  error: `error`,
}

storiesOf(`Modal`, module)
  .addDecorator(withKnobs)
  .add(`Card`, () => {
    const maxWidthLabel = `Max width`
    const maxWidthOptions = {
      range: true,
      min: 20,
      max: 100,
      step: 1,
    }

    const value = number(maxWidthLabel, 100, maxWidthOptions)

    return (
      <Modal
        type={select(label, options, `info`) as ModalType}
        aria-label="Some impressive content"
        isVisible={boolean(`Is opened?`, true)}
        onClose={() => console.log(`Dismissed!`)}
      >
        <ModalCard maxWidth={`${value}%`}>
          <div>Hello world</div>
        </ModalCard>
      </Modal>
    )
  })
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
        isVisible={boolean(`Is opened?`, true)}
        onClose={() => console.log(`Dismissed!`)}
      >
        <ModalPanel
          position={
            select(positionLabel, positionOptions, `left`) as "left" | "right"
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
      isVisible={boolean(`Is opened?`, true)}
      onClose={() => console.log(`Dismissed!`)}
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
        isVisible={isParentOpened}
        onClose={() => console.log(`Dismissed!`)}
      >
        <ModalFullScreen>
          <div>Parent modal</div>
          <div>
            <button onClick={() => setChildren(true)}>Show children</button>

            <Modal
              aria-label="Some impressive content"
              isVisible={isChildrenOpened}
              onClose={() => console.log(`Dismissed!`)}
            >
              <ModalCard maxWidth="50%">
                <div>Children modal</div>
              </ModalCard>
            </Modal>
          </div>
        </ModalFullScreen>
      </Modal>
    </div>
  )
}
