/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { VisuallyHidden } from "."

export default {
  title: `VisuallyHidden`,
  component: VisuallyHidden,
}

export const Basic = () => (
  <React.Fragment>
    (The text is hidden from view but exists in the DOM).
    <VisuallyHidden>
      I will be announced by screen readers but hidden from view.
    </VisuallyHidden>
  </React.Fragment>
)
