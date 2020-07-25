/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { keyframes } from "@emotion/core"
import { ModalContent, ModalContentProps } from "./ModalContent"
import { ThemeCss } from "../../theme"
import { warn } from "../../utils/maintenance/warn"

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

const DEFAULT_MAX_WIDTH = `432px`

const sizesStyles: Record<PanelSize, ThemeCss> = {
  DEFAULT: _theme => ({
    maxWidth: `100%`,
    [`@media (min-width: ${DEFAULT_MAX_WIDTH})`]: {
      maxWidth: DEFAULT_MAX_WIDTH,
    },
  }),
}

export type PanelPosition = "left" | "right"
export type ModalPanelPosition = "left" | "right"
export type PanelSize = "DEFAULT"

export type ModalPanelProps = Omit<ModalContentProps, "ref"> & {
  position?: ModalPanelPosition
  size?: PanelSize
  // DEPRECATED, ONLY USE "size" INSTEAD
  maxWidth?: string
}

export const ModalPanel: React.FC<ModalPanelProps> = ({
  maxWidth,
  position = `right`,
  size = `DEFAULT`,
  ...props
}) => {
  if (maxWidth) {
    warn(
      `"maxWidth" prop has been deprecated in favour of "size" (set to "DEFAULT" if not passed)`
    )
  }

  return (
    <ModalContent
      css={theme => [
        baseCss(theme),
        maxWidth ? { maxWidth } : sizesStyles[size](theme),
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
}
