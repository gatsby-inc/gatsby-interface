/**
 * This component is based on the "Triangle pointers" example
 * from Reach UI docs: https://reacttraining.com/reach-ui/tooltip/#triangle-pointers-and-custom-styles
 */
import React from "react"
import Portal from "../Portal"
import { TooltipPosition } from "./types"

// We position the pointer relative to the trigger, not the popup
// so that collisions don't have the pointer pointing off to nowhere.
// Using a Portal may seem a little extreme, but we can keep the
// positioning logic simpler here instead of needing to consider
// the popup's position relative to the trigger and collisions
type PointerPositionFn = (triggerRect: DOMRect) => React.CSSProperties

const pointerPosition: Record<TooltipPosition, PointerPositionFn> = {
  top: pointerPositionTop,
  bottom: pointerPositionBottom,
}

export type TooltipPointerProps = {
  triggerRect: DOMRect
  position: TooltipPosition
  style?: React.CSSProperties
}

export default function TooltipPointer({
  position,
  triggerRect,
  style = {},
}: TooltipPointerProps) {
  const getPointerPosition = pointerPosition[position]
  const positionStyle = triggerRect ? getPointerPosition(triggerRect) : {}

  return (
    <Portal>
      <div
        style={{
          ...positionStyle,
          position: "absolute",
          width: 0,
          height: 0,
          ...style,
        }}
      />
    </Portal>
  )
}

export const TOOLTIP_POINTER_SIZE = 6
export const TOOLTIP_POINTER_ADJUST = 1

const pointerBorderTransparent = `${TOOLTIP_POINTER_SIZE}px solid transparent`
const pointerBorderFilled = `${TOOLTIP_POINTER_SIZE}px solid black`

function pointerPositionBottom(triggerRect: DOMRect) {
  return {
    borderLeft: pointerBorderTransparent,
    borderRight: pointerBorderTransparent,
    borderBottom: pointerBorderFilled,
    left: getPositionOffsetLeft(triggerRect),
    top: triggerRect.bottom + window.scrollY + TOOLTIP_POINTER_ADJUST,
  }
}

function pointerPositionTop(triggerRect: DOMRect) {
  return {
    borderLeft: pointerBorderTransparent,
    borderRight: pointerBorderTransparent,
    borderTop: pointerBorderFilled,
    left: getPositionOffsetLeft(triggerRect),
    top:
      triggerRect.top -
      TOOLTIP_POINTER_SIZE +
      window.scrollY -
      TOOLTIP_POINTER_ADJUST,
  }
}

function getPositionOffsetLeft(triggerRect: DOMRect) {
  return triggerRect.left + triggerRect.width / 2 - TOOLTIP_POINTER_SIZE
}
