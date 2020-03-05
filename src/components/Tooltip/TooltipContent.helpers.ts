import { Position } from "@reach/tooltip"
import { TooltipPosition, PRect } from "./types"
import { TOOLTIP_POINTER_SIZE } from "./TooltipPointer"

export const tooltipPosition: Record<TooltipPosition, Position> = {
  top: positionTop,
  bottom: positionBottom,
}

const MIN_WINDOW_SPACING = 4

function positionBottom(
  triggerRect: PRect | null | undefined,
  tooltipRect: PRect | null | undefined
) {
  if (!triggerRect || !tooltipRect) {
    return {}
  }
  const baseTop = triggerRect.bottom + TOOLTIP_POINTER_SIZE

  return {
    left: normalizeLeft(triggerRect, tooltipRect),
    width: normalizeWidth(triggerRect, tooltipRect),
    top: baseTop + window.scrollY,
  }
}

function positionTop(
  triggerRect: PRect | null | undefined,
  tooltipRect: PRect | null | undefined
) {
  if (!triggerRect || !tooltipRect) {
    return {}
  }
  const baseTop = triggerRect.top - tooltipRect.height - TOOLTIP_POINTER_SIZE

  return {
    left: normalizeLeft(triggerRect, tooltipRect),
    width: normalizeWidth(triggerRect, tooltipRect),
    top: baseTop + window.scrollY,
  }
}

function normalizeLeft(triggerRect: PRect, tooltipRect: PRect) {
  const triggerCenter = triggerRect.left + triggerRect.width / 2
  const left = triggerCenter - tooltipRect.width / 2
  const maxLeft = window.innerWidth - tooltipRect.width - MIN_WINDOW_SPACING

  // Use min-max to avoid the tooltip overflowing the window boundaries
  const optimalLeft = Math.min(Math.max(2, left), maxLeft)

  return optimalLeft + window.scrollX
}

/**
 * This helper makes sure that the tooltip fits the screen width
 */
function normalizeWidth(triggerRect: PRect, tooltipRect: PRect) {
  const maxAllowedWidth = window.innerWidth - 2 * MIN_WINDOW_SPACING

  if (tooltipRect.width <= maxAllowedWidth) {
    return tooltipRect.width
  }

  return maxAllowedWidth
}
