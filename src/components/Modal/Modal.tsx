import React from "react"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import styled from "@emotion/styled"
import { palette } from "../../utils/presets"
import { hexToRGBA } from "../../utils/helpers/hexToRgb"
import { keyframes } from "@emotion/core"

import "@reach/dialog/styles.css"

export type ModalType = "success" | "info" | "warn" | "error"

const buildFadeIn = (color: string) =>
  keyframes`
    0% {
       background-color: transparent;
     }
   
     100% {
       background-color: ${color};
     }
   `

const successFade = buildFadeIn(hexToRGBA(palette.green[`500`], 0.75))
const errorFade = buildFadeIn(hexToRGBA(palette.red[`500`], 0.75))
const infoFade = buildFadeIn(hexToRGBA(palette.purple[`500`], 0.75))
const warnFade = buildFadeIn(hexToRGBA(palette.orange[`500`], 0.75))

export interface ModalProps {
  type?: ModalType
  isVisible?: boolean
  onClose: () => void
}

const getBackgroundAnimation = (type?: ModalType) => {
  if (type === `error`) return errorFade
  if (type === `warn`) return warnFade
  if (type === `success`) return successFade

  return infoFade
}

const Overlay = styled(DialogOverlay)<any>`
  animation: ${props => props.animation} 0.5s ease forwards;
`

const Content = styled(DialogContent)`
  margin: 0;
  padding: 0;
  background: transparent;
  width: auto;
`

export const Modal: React.FC<ModalProps> = ({
  children,
  type,
  isVisible,
  onClose,
  ...props
}) => (
  <Overlay
    {...props}
    animation={getBackgroundAnimation(type)}
    isOpen={isVisible}
    onDismiss={onClose}
  >
    <Content>{children}</Content>
  </Overlay>
)
