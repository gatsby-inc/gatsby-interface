/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { keyframes } from "@emotion/core"
import { ModalContent, ModalContentProps } from "./ModalContent"
import { ThemeCss } from "../../theme"

const rotationIncoming = keyframes`
  100% {
     transform: translate(0, 0) scale(1) perspective(1000px) rotateX(0);
  }
`

const baseCss: ThemeCss = theme => ({
  background: theme.colors.white,
  height: `100vh`,
  width: `100%`,
  position: "relative",
  overflowY: `auto`,
  overflowX: `hidden`,
  animation: `${rotationIncoming} 0.5s 0.25s ease forwards`,
  transform: `translate(0, 150vh) scale(0.9) perspective(1000px) rotateX(-90deg)`,
  transformOrigin: `top center`,
})

export type ModalFullScreenProps = Omit<ModalContentProps, "ref">

export const ModalFullScreen: React.FC<ModalFullScreenProps> = props => (
  <ModalContent css={baseCss} {...props} />
)
