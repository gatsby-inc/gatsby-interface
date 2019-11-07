import React, { useRef } from "react"
import { storiesOf } from "@storybook/react"
import { ConfirmationModal } from "./ConfirmationModal"
import { withKnobs, select, boolean } from "@storybook/addon-knobs"
import { ModalType } from "../Modal/Modal"
import {
  ConfirmationModalLabel,
  ConfirmationModalDescription,
} from "./ConfirmationModalComponents"

const label = `Type`
const options = {
  success: `success`,
  info: `info`,
  warn: `warn`,
  error: `error`,
}

const ExampleConfirmationModal = () => {
  const destructiveRef = useRef<HTMLButtonElement>(null)
  return (
    <ConfirmationModal
      initialFocusRef={destructiveRef}
      type={select(label, options, `info`) as ModalType}
      isOpen={boolean(`Is opened?`, true)}
      onDismiss={() => console.log(`Dismissed!`)}
    >
      <ConfirmationModalLabel>BE CAREFUL!</ConfirmationModalLabel>
      <ConfirmationModalDescription>
        You're about to make something complex!
      </ConfirmationModalDescription>

      <button>Confirmation</button>
      <button ref={destructiveRef}>Destructive</button>
    </ConfirmationModal>
  )
}

storiesOf(`ConfirmationModal`, module)
  .addDecorator(withKnobs)
  .add(`default`, () => <ExampleConfirmationModal />)
