/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { DialogOverlay, DialogOverlayProps } from "@reach/dialog"
import colors from "../../theme/colors"
import { hexToRGBA } from "../../utils/helpers/hexToRgb"
import { keyframes } from "@emotion/core"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"
import { ThemeCss } from "../../theme"

const buildFadeIn = (color: string) =>
  keyframes`
    0% {
       background-color: transparent;
     }
   
     100% {
       background-color: ${color};
     }
   `

const fadeMap: Record<ModalType, ReturnType<typeof keyframes>> = {
  info: buildFadeIn(hexToRGBA(colors.purple[50], 0.75)),
  success: buildFadeIn(hexToRGBA(colors.green[50], 0.75)),
  warn: buildFadeIn(hexToRGBA(colors.orange[50], 0.75)),
  error: buildFadeIn(hexToRGBA(colors.red[50], 0.75)),
}

const overlayCss: ThemeCss = theme => ({
  background: `hsla(0, 0%, 0%, 0.33)`,
  position: `fixed`,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: `auto`,
  zIndex: theme.zIndices.modals,
})

export type ModalType = "success" | "info" | "warn" | "error"

export interface ModalProps extends Omit<DialogOverlayProps, "ref"> {
  type?: ModalType
}

export const Modal: React.FC<ModalProps> = ({
  type = "info",
  initialFocusRef,
  isOpen,
  onDismiss,
  children,
  ...props
}) => {
  return (
    <React.Fragment>
      <DisableReachStyleCheck reachComponent="dialog" />
      <DialogOverlay
        initialFocusRef={initialFocusRef}
        isOpen={isOpen}
        onDismiss={onDismiss}
        css={theme => [
          overlayCss(theme),
          {
            animation: `${fadeMap[type]} 0.5s ease forwards`,
          },
        ]}
      >
        {React.cloneElement(children as any, props)}
      </DialogOverlay>
    </React.Fragment>
  )
}
