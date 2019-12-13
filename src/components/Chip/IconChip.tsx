/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { css } from "@emotion/core"
import Chip, { ChipProps } from "./Chip"

const iconCss = css({
  display: "inline-flex",
  alignItems: `center`,
  verticalAlign: `middle`,
  height: `0.875rem`,
  width: `0.875rem`,
  fontSize: `0.875rem`,
})

const iconOffsetCss = css({
  marginRight: `0.25rem`,
})

const iconOnlyCss = css({ padding: 0, textAlign: "center" })

export type IconChipProps = ChipProps & {
  icon: React.ReactNode | null;
}

export default function IconChip({ icon, children, ...props }: IconChipProps) {
  return (
    <Chip css={!children && iconOnlyCss} {...props}>
      {icon && <span css={[iconCss, children && iconOffsetCss]}>{icon}</span>}
      {children}
    </Chip>
  )
}
