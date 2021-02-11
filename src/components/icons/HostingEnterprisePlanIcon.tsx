import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function HostingEnterprisePlanIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="HostingEnterprisePlanIcon">
      <circle cx="12" cy="12" r="10.5" stroke="#663399" />
      <circle cx="12" cy="12" r="7.5" stroke="#663399" />
      <circle cx="12" cy="12" r="4.5" stroke="#663399" />
      <circle
        r="1.5"
        transform="matrix(-1 0 0 1 12 12)"
        fill="#663399"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
