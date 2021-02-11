import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function TwoCircleIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="TwoCircleIcon">
      {/* insert inner SVG code here */}
    </IconSkeleton>
  )
}
