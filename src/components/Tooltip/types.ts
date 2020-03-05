export type TooltipPosition = "top" | "bottom"

// Ideally, it should be exposed by @reach/tooltip but it isn't ¯\_(ツ)_/¯
export type PRect = Partial<DOMRect> & {
  readonly bottom: number
  readonly height: number
  readonly left: number
  readonly right: number
  readonly top: number
  readonly width: number
}
