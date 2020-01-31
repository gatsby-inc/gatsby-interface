/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import space from "../../../theme/space"

export const Wrapper: React.FC<{}> = ({ children }) => (
  <div
    css={{
      maxWidth: `80%`,
      width: `25rem`,
      "& > * + *": {
        marginTop: `${space[8]}!important`,
      },
    }}
  >
    {children}
  </div>
)
