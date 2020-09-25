import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function CloseCircleIcon(props: IconProps) {
  return (
    <IconSkeleton
      {...props}
      iconName="CloseCircleIcon"
      applyColorToStroke={false}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M16.6666 8.27331L15.7266 7.33331L12 11.06L8.27331 7.33331L7.33331 8.27331L11.06 12L7.33331 15.7266L8.27331 16.6666L12 12.94L15.7266 16.6666L16.6666 15.7266L12.94 12L16.6666 8.27331Z"
        fill="white"
      />
    </IconSkeleton>
  )
}
