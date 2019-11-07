import React, { useContext } from "react"
import ConfirmationModalContext from "./ConfirmationModalContext"

export interface ConfirmationModalDetailProps {
  prefixId?: string
}

export const ConfirmationModalLabel: React.FC<ConfirmationModalDetailProps> = ({
  ...props
}) => {
  const { labelId } = useContext(ConfirmationModalContext)

  return <div id={labelId} {...props} />
}

export const ConfirmationModalDescription: React.FC<
  ConfirmationModalDetailProps
> = ({ prefixId = `gatsby-modal`, ...props }) => {
  const { descriptionId } = useContext(ConfirmationModalContext)

  return <div id={descriptionId} {...props} />
}
