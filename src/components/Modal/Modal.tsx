import React from "react"
import {
  DialogOverlay,
  DialogContent,
  DialogOverlayProps,
  DialogContentProps,
} from "@reach/dialog"
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

export interface ModalProps
  extends Omit<DialogOverlayProps, "ref">,
    Omit<DialogContentProps, "ref"> {
  type?: ModalType
}

const getBackgroundAnimation = (type?: ModalType) => {
  if (type === `error`) return errorFade
  if (type === `warn`) return warnFade
  if (type === `success`) return successFade

  return infoFade
}

const Overlay = styled(DialogOverlay)<
  DialogOverlayProps & { animation: ReturnType<typeof buildFadeIn> }
>`
  z-index: 9999;
  animation: ${props => props.animation} 0.5s ease forwards;
`

const Content = styled(DialogContent)`
  margin: 0;
  padding: 0;
  background: transparent;
  width: auto;
`

export const Modal: React.FC<ModalProps> = ({
  type,
  initialFocusRef,
  isOpen,
  onDismiss,
  ...props
}) => (
  <Overlay
    initialFocusRef={initialFocusRef}
    isOpen={isOpen}
    onDismiss={onDismiss}
    animation={getBackgroundAnimation(type)}
  >
    <Content {...props} />
  </Overlay>
)
