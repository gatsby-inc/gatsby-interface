/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { keyframes } from "@emotion/core"
import { ModalContent, ModalContentProps } from "./ModalContent"
import { ThemeCss } from "../../theme"

const buildTranslation = (position: ModalPanelPosition) => keyframes`
  0% {
    transform: translate3d${position === `left` ? `(-100%, 0,0)` : `(100%,0,0)`}
   }
 
   100% {
    transform: translate3d(0,0,0);
   }
 `

const translateLeft = buildTranslation(`left`)
const translateRight = buildTranslation(`right`)

const baseCss: ThemeCss = theme => ({
  background: theme.colors.white,
  height: `100vh`,
  position: "absolute",
  animationDuration: `0.5s`,
  animationFillMode: `forwards`,
  animationTimingFunction: `ease`,
})

export type PanelPosition = "left" | "right"
export type ModalPanelPosition = "left" | "right"

export type ModalPanelProps = Omit<ModalContentProps, "ref"> & {
  position?: ModalPanelPosition
  maxWidth?: string
}

export const ModalPanel: React.FC<ModalPanelProps> = ({
  maxWidth = `50vw`,
  position = `right`,
  ...props
}) => (
  <ModalContent
    css={theme => [
      baseCss(theme),
      { maxWidth },
      position === `right`
        ? {
            right: 0,
            animationName: translateRight,
          }
        : {
            left: 0,
            animationName: translateLeft,
          },
    ]}
    {...props}
  />
)
