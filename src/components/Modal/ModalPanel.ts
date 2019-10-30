import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { palette, spaces } from "../../utils/presets"

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

export const ModalPanel = styled.div<PanelProps>`
  background: ${palette.white};
  max-width: ${props => props.maxWidth || `20%`};
  height: 100vh;
  padding: ${spaces.m};
  position: absolute;
  right: ${props => props.position === `right` && 0};
  animation: ${props =>
      props.position === `right` ? translateRight : translateLeft}
    0.5s ease forwards;
`
