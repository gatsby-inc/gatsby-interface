import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import colors from "../../theme/colors"
import { Content } from "./components"

const rotationIncoming = keyframes`
  100% {
     transform: translate(0, 0) scale(1) perspective(1000px) rotateX(0);
  }
`

const AnimatedFullScreen = styled.div`
  animation: ${rotationIncoming} 0.5s 0.25s ease forwards;
  background: ${colors.white};
  height: 100vh;
  width: 100%;
  outline: none;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  transform: translate(0, 150vh) scale(0.9) perspective(1000px) rotateX(-90deg);
  transform-origin: top center;
`

export const ModalFullScreen: React.FC = props => (
  <AnimatedFullScreen>
    <Content {...props}></Content>
  </AnimatedFullScreen>
)
