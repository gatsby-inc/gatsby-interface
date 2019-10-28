export interface ModalProps extends ModalActions, ModalOptions {}

export type ModalType = "success" | "error" | "info" | "warn"

export type ModalPosition = "left" | "right"

export interface ModalActions {
  /** Create a modal with a unique name, a Component to render in the modal and some adition options */
  showModal: (
    modalName: string,
    Component: React.FC<ModalProps>,
    options?: ModalOptions
  ) => void
  /** Hide a modal based on its unique name */
  hideModal: (modalName: string) => void
  /** Check if a specific modal is opened */
  isOpened: (modalName: string) => boolean
  /** Hide the last element in the stack */
  hideCurrentModal: () => void
  /* Completely clear the stack */
  hideAll: () => void
}

export interface ModalOptions {
  type?: ModalType
  position?: ModalPosition
  /**
   * this allows to add unknown properties while calling showModal without TS errors
   * example: showModal('name', Component, { type: "success", unknown: 'something })
   * => the props will be passed down to the Component when mounting
   */
  [key: string]: any
}
