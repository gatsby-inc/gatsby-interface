/** @jsx jsx */
import { jsx } from "@emotion/core"
import { visuallyHiddenCss } from "../../stylesheets/a11y"

export type VisuallyHiddenProps = {
  children: React.ReactNode
}

function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span css={visuallyHiddenCss}>{children}</span>
}

export default VisuallyHidden
