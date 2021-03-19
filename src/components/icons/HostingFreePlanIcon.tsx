import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function HostingFreePlanIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="HostingFreePlanIcon">
      <circle opacity="0.5" cx="12" cy="12" r="10.5" stroke="#90CDF9" />
      <circle opacity="0.5" cx="12" cy="12" r="7.5" stroke="#90CDF9" />
      <circle opacity="0.5" cx="12" cy="12" r="4.5" stroke="#90CDF9" />
      <circle
        r="1.5"
        transform="matrix(-1 0 0 1 12 12)"
        fill="#047BD3"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
