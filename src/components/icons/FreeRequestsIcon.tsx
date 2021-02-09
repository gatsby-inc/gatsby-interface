import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function FreeRequestsIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="FreeRequestsIcon">
      <rect
        x="5.6665"
        y="14.5"
        width="2.66667"
        height="4"
        fill="currentColor"
        strokeWidth="0"
      />
      <rect
        x="9"
        y="11.5"
        width="2.66667"
        height="7"
        fill="#D9D7E0"
        strokeWidth="0"
      />
      <rect
        x="12.3333"
        y="8.5"
        width="2.66667"
        height="10"
        fill="#D9D7E0"
        strokeWidth="0"
      />
      <rect
        x="15.6665"
        y="5.5"
        width="2.66667"
        height="13"
        fill="#D9D7E0"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
