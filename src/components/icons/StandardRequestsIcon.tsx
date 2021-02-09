import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function StandardRequestsIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="StandardRequestsIcon">
      <rect
        x="5.66675"
        y="14.5"
        width="2.66667"
        height="4"
        fill="currentColor"
        strokeWidth="0"
      />
      <rect
        x="9.00024"
        y="11.5"
        width="2.66667"
        height="7"
        fill="currentColor"
        strokeWidth="0"
      />
      <rect
        x="12.3335"
        y="8.5"
        width="2.66667"
        height="10"
        fill="#D9D7E0"
        strokeWidth="0"
      />
      <rect
        x="15.6667"
        y="5.5"
        width="2.66667"
        height="13"
        fill="#D9D7E0"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
