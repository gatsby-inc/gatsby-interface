import React from "react"
import { useTooltip } from "@reach/tooltip"
import { useTransition, animated } from "react-spring"

import { TooltipPosition } from "./types"
import TooltipContent from "./TooltipContent"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"

const AnimatedTooltipContent = animated(TooltipContent)

const transitionConfig = {
  from: { opacity: 0, transform: "translateY(10px)" },
  enter: { opacity: 1, transform: "translateY(0px)" },
  leave: { opacity: 0, transform: "translateY(10px)" },
}

export type TooltipProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref" | "label" | "children"
> & {
  label: React.ReactNode
  children: React.ReactNode
  position?: TooltipPosition
}

export default function Tooltip({
  children,
  id,
  label,
  ...rest
}: TooltipProps) {
  // COPIED FROM @reach/tooltip source:
  //
  // We need to pass some properties from the child into useTooltip
  // to make sure users can maintain control over the trigger's ref and events
  const child = React.Children.only(children) as any

  const [trigger, tooltipParams, isVisible] = useTooltip({
    id,
    onMouseEnter: child.props.onMouseEnter,
    onMouseMove: child.props.onMouseMove,
    onMouseLeave: child.props.onMouseLeave,
    onFocus: child.props.onFocus,
    onBlur: child.props.onBlur,
    onKeyDown: child.props.onKeyDown,
    onMouseDown: child.props.onMouseDown,
    ref: child.ref,
  })

  const transitions = useTransition(
    isVisible ? tooltipParams : null,
    null,
    transitionConfig
  )

  return (
    <React.Fragment>
      {React.cloneElement(child, trigger as any)}

      {transitions.map(({ item: tooltip, props: transitionStyles, key }) => {
        if (!tooltip) {
          return null
        }

        return (
          <AnimatedTooltipContent
            key={key}
            label={label}
            tooltipParams={tooltip}
            style={transitionStyles}
            {...rest}
          />
        )
      })}
      <DisableReachStyleCheck reachComponent="tooltip" />
    </React.Fragment>
  )
}
