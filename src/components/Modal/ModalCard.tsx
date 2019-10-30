import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { Card } from "../Card"

export interface ModalCardProps {
  maxWidth?: string
}

const cardIncoming = keyframes`
  100% {
     transform: translate(0, calc(50vh - 50%)) scale(1) perspective(1000px) rotateX(0);
  }
`

const CardAnimation = styled.div<ModalCardProps>`
  animation: ${cardIncoming} 0.5s 0.25s ease forwards;
  transform: translate(0, 90vh) scale(0.9) perspective(1000px) rotateX(-90deg);
  transform-origin: top center;
  margin: 0 auto;
  max-width: ${props => props.maxWidth || `100%`};
`

export const ModalCard: React.FC<ModalCardProps> = ({ children, maxWidth }) => (
  <CardAnimation maxWidth={maxWidth}>
    <Card>{children}</Card>
  </CardAnimation>
)
