import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function HostingStandardPlanIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="HostingStandardPlanIcon">
      <circle cx="12" cy="12" r="10.5" stroke="#FFD280" />
      <circle cx="12" cy="12" r="7.5" stroke="#FFD280" />
      <circle cx="12" cy="12" r="4.5" stroke="#E34200" />
      <circle
        r="1.5"
        transform="matrix(-1 0 0 1 12 12)"
        fill="#E34200"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
