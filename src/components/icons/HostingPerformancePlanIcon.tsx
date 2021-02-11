import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function HostingPerformancePlanIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="HostingPerformancePlanIcon">
      <circle cx="12" cy="12" r="10.5" stroke="#F2C4E3" />
      <circle cx="12" cy="12" r="7.5" stroke="#A6026A" />
      <circle cx="12" cy="12" r="4.5" stroke="#A6026A" />
      <circle
        r="1.5"
        transform="matrix(-1 0 0 1 12 12)"
        fill="#A6026A"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
