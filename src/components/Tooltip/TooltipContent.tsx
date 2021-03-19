/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { TooltipPopup, TooltipParams } from "@reach/tooltip"
import { TooltipPosition } from "./types"
import TooltipPointer, { TooltipPointerProps } from "./TooltipPointer"
import { tooltipPosition } from "./TooltipContent.helpers"
import { ThemeCss } from "../../theme"

type TooltipContentProps = Omit<
  JSX.IntrinsicElements["div"],
  "label" | "children"
> & {
  label: React.ReactNode
  tooltipParams: TooltipParams
  position?: TooltipPosition
} & Pick<TooltipPointerProps, "style">

const baseCss: ThemeCss = theme => ({
  // defaults from @reach/tooltip
  zIndex: 1,
  pointerEvents: `none`,
  position: `absolute`,
  boxShadow: `2px 2px 10px hsla(0, 0%, 0%, 0.1)`,
  // gatsby-interface styles
  background: theme.colors.black,
  color: theme.colors.whiteFade[80],
  fontSize: theme.fontSizes[1],
  border: "none",
  borderRadius: theme.radii[2],
  padding: `${theme.space[2]} ${theme.space[3]}`,
  transformOrigin: "center",
  whiteSpace: "normal",
})

export default function TooltipContent({
  position = "top",
  label,
  tooltipParams,
  "aria-label": ariaLabel,
  style,
  ...rest
}: TooltipContentProps) {
  return (
    <TooltipPopup
      {...tooltipParams}
      {...rest}
      label={
        <React.Fragment>
          {tooltipParams.triggerRect && (
            <TooltipPointer
              triggerRect={tooltipParams.triggerRect}
              position={position}
              style={style}
            />
          )}
          {label}
        </React.Fragment>
      }
      ariaLabel={ariaLabel}
      aria-label={ariaLabel}
      css={baseCss}
      style={style}
      position={tooltipPosition[position]}
    />
  )
}
