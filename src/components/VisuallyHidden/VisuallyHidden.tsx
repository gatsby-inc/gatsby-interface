/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { visuallyHiddenCss } from "../../stylesheets/a11y"

export type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"span"> & {
  children: React.ReactNode
}

export function VisuallyHidden({ children, ...rest }: VisuallyHiddenProps) {
  return (
    <span css={visuallyHiddenCss} {...rest}>
      {children}
    </span>
  )
}
