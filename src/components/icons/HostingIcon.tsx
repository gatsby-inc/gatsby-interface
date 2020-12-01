import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function HostingIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="HostingIcon" fill="none" stroke="none">
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="9"
        width="16"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="17"
        width="16"
        height="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="7" y="12" width="2" height="2" fill="currentColor" />
      <rect x="7" y="18" width="2" height="2" fill="currentColor" />
      <rect x="11" y="18" width="2" height="2" fill="currentColor" />
      <rect x="15" y="18" width="2" height="2" fill="currentColor" />
      <rect x="7" y="5" width="2" height="2" fill="currentColor" />
      <rect x="11" y="12" width="2" height="2" fill="currentColor" />
    </IconSkeleton>
  )
}
