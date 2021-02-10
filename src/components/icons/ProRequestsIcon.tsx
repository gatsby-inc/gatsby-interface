import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function ProRequestsIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="ProRequestsIcon">
      <rect
        x="3.15381"
        y="15.746"
        width="3.99579"
        height="5.99368"
        fill="currentColor"
        strokeWidth="0"
      />
      <rect
        x="8.14868"
        y="11.2508"
        width="3.99579"
        height="10.4889"
        fill="currentColor"
        strokeWidth="0"
      />
      <rect
        x="13.1433"
        y="6.75552"
        width="3.99579"
        height="14.9842"
        fill="currentColor"
        strokeWidth="0"
      />
      <rect
        x="18.1379"
        y="2.26025"
        width="3.99579"
        height="19.4795"
        fill="#D9D7E0"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
