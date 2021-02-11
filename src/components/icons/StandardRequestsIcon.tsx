import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function StandardRequestsIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="StandardRequestsIcon">
      <rect
        x="2.8623"
        y="15.8652"
        width="3.9975"
        height="5.99625"
        fill="currentColor"
        strokeWidth="0"
      />
      <rect
        x="7.85938"
        y="11.3681"
        width="3.9975"
        height="10.4934"
        fill="currentColor"
        strokeWidth="0"
      />
      <rect
        x="12.8562"
        y="6.87082"
        width="3.9975"
        height="14.9906"
        fill="#D9D7E0"
        strokeWidth="0"
      />
      <rect
        x="17.8528"
        y="2.37366"
        width="3.9975"
        height="19.4878"
        fill="#D9D7E0"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
