import { Interpolation } from "@emotion/core"

export const visuallyHiddenCss: Interpolation = {
  border: 0,
  clip: `rect(0 0 0 0)`,
  height: `1px`,
  width: `1px`,
  margin: `-1px`,
  padding: 0,
  overflow: `hidden`,
  position: `absolute`,
}

export const resetVisuallyHiddenCss: Interpolation = {
  border: `unset`,
  clip: `unset`,
  height: `unset`,
  width: `unset`,
  margin: `unset`,
  padding: `unset`,
  overflow: `unset`,
  position: `unset`,
}
