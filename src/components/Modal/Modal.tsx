import React from "react"
import {
  DialogOverlay,
  DialogOverlayProps,
  DialogContentProps,
} from "@reach/dialog"
import styled from "@emotion/styled"
import colors from "../../theme/colors"
import zIndices from "../../theme/zIndices"
import { hexToRGBA } from "../../utils/helpers/hexToRgb"
import { keyframes } from "@emotion/core"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"

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

const successFade = buildFadeIn(hexToRGBA(colors.green[50], 0.75))
const errorFade = buildFadeIn(hexToRGBA(colors.red[50], 0.75))
const infoFade = buildFadeIn(hexToRGBA(colors.purple[50], 0.75))
const warnFade = buildFadeIn(hexToRGBA(colors.orange[50], 0.75))

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

type Props = DialogOverlayProps & { animation: ReturnType<typeof buildFadeIn> }
const Overlay = styled(DialogOverlay)<Props>`
  background: hsla(0, 0%, 0%, 0.33);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: ${zIndices.modals};
  animation: ${props => props.animation} 0.5s ease forwards;
`

export const Modal: React.FC<ModalProps> = ({
  type,
  initialFocusRef,
  isOpen,
  onDismiss,
  children,
  ...props
}) => {
  return (
    <React.Fragment>
      <DisableReachStyleCheck reachComponent="dialog" />
      <Overlay
        initialFocusRef={initialFocusRef}
        isOpen={isOpen}
        onDismiss={onDismiss}
        animation={getBackgroundAnimation(type)}
      >
        {React.cloneElement(children as any, props)}
      </Overlay>
    </React.Fragment>
  )
}
