import React, { useRef } from "react"
import ConfirmationModalContext from "./ConfirmationModalContext"
import { Modal, ModalCard } from "../Modal"
import { ModalProps } from "../Modal/Modal"

export interface ConfirmationModalProps extends ModalProps {
  prefixId?: string
}

let MODAL_IDS = 0
export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  children,
  prefixId = `gatsby-modal`,
  ...props
}) => {
  const modalId = useRef<number>(MODAL_IDS++).current
  const labelId = `${prefixId}-label-${modalId}`
  const descriptionId = `${prefixId}-description-${modalId}`

  return (
    <ConfirmationModalContext.Provider value={{ labelId, descriptionId }}>
      <Modal
        {...props}
        role="alertdialog"
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
      >
        <ModalCard>{children}</ModalCard>
      </Modal>
    </ConfirmationModalContext.Provider>
  )
}
