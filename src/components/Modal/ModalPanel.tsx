/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { animated, useSpring, UseSpringProps } from "react-spring"
import { ModalContent, ModalContentProps } from "./ModalContent"
import { ThemeCss } from "../../theme"
import { warn } from "../../utils/maintenance/warn"

const baseCss: ThemeCss = theme => ({
  background: theme.colors.white,
  height: `100vh`,
  position: "fixed",
  overflowY: "auto",
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

const AnimatedModalContent = animated(ModalContent)

const springConfig: Record<
  PanelPosition,
  UseSpringProps<React.CSSProperties>
> = {
  right: {
    from: {
      transform: "translate3d(100%,0,0)",
    },
  },
  left: {
    from: {
      transform: "translate3d(-100%,0,0)",
    },
  },
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
  const styleProps = useSpring({
    to: {
      transform: "translate3d(0,0,0)",
    },
    config: {
      tension: 400,
      mass: 1,
      friction: 40,
    },
    ...springConfig[position],
  })

  if (maxWidth) {
    warn(
      `"maxWidth" prop has been deprecated in favour of "size" (set to "DEFAULT" if not passed)`
    )
  }

  return (
    <AnimatedModalContent
      style={styleProps}
      css={theme => [
        baseCss(theme),
        maxWidth ? { maxWidth } : sizesStyles[size](theme),
        position === `right`
          ? {
              right: 0,
            }
          : {
              left: 0,
            },
      ]}
      {...props}
    />
  )
}
