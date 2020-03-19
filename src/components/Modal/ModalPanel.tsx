import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import space from "../../theme/space"
import colors from "../../theme/colors"
import { Content } from "./components"

const buildTranslation = (position: PanelPosition) => keyframes`
  0% {
    transform: translate3d${position === `left` ? `(-100%, 0,0)` : `(100%,0,0)`}
   }
 
   100% {
    transform: translate3d(0,0,0);
   }
 `

const translateLeft = buildTranslation(`left`)
const translateRight = buildTranslation(`right`)

export type PanelPosition = "left" | "right"

export interface PanelProps {
  position?: PanelPosition
  maxWidth?: string
}

const AnimatedPanel = styled.div<PanelProps>`
  background: ${colors.white};
  max-width: ${props => props.maxWidth || `20%`};
  height: 100vh;
  padding: ${space[5]};
  position: absolute;
  right: ${props => props.position === `right` && 0};
  animation: ${props =>
      props.position === `right` ? translateRight : translateLeft}
    0.5s ease forwards;
`

export const ModalPanel: React.FC<PanelProps> = ({
  maxWidth,
  position,
  ...props
}) => (
  <AnimatedPanel position={position} maxWidth={maxWidth}>
    <Content {...props} />
  </AnimatedPanel>
)
