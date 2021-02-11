import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function FreeRequestsIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="FreeRequestsIcon">
      <rect
        x="2.86572"
        y="15.6434"
        width="3.99585"
        height="5.82946"
        fill="currentColor"
        strokeWidth="0"
      />
      <rect
        x="7.86084"
        y="11.2714"
        width="3.99585"
        height="10.2016"
        fill="#D9D7E0"
        strokeWidth="0"
      />
      <rect
        x="12.8555"
        y="6.89923"
        width="3.99585"
        height="14.5737"
        fill="#D9D7E0"
        strokeWidth="0"
      />
      <rect
        x="17.8503"
        y="2.52716"
        width="3.99585"
        height="18.9458"
        fill="#D9D7E0"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
