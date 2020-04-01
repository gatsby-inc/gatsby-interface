/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { keyframes } from "@emotion/core"
import { ModalContent, ModalContentProps } from "./ModalContent"
import { ThemeCss } from "../../theme"

const cardIncoming = keyframes`
  100% {
     transform: translate(0, calc(50vh - 50%)) scale(1) perspective(1000px) rotateX(0);
  }
`

const baseCss: ThemeCss = theme => ({
  background: theme.colors.white,
  borderRadius: theme.radii[3],
  boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.2)",
  maxWidth: `calc(100% - (${theme.space[5]} * 2))`,
  animation: `${cardIncoming} 0.5s 0.25s ease forwards`,
  transform:
    "translate(0, 90vh) scale(0.9) perspective(1000px) rotateX(-90deg)",
  transformOrigin: "top center",
  margin: "0 auto",
  [theme.mediaQueries.mobile]: {
    maxWidth: `calc(100% - (${theme.space[7]} * 2))`,
  },
  [theme.mediaQueries.phablet]: { width: "620px" },
})

export type ModalCardProps = Omit<ModalContentProps, "ref">

export const ModalCard: React.FC<ModalCardProps> = props => (
  <ModalContent css={baseCss} {...props} />
)
