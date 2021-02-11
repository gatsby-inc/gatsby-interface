import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function OneUserIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="OneUserIcon" applyColorToStroke={false}>
      <path
        d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11ZM12 12C9.35773 12 7.07504 12.5166 6 15.0349C7.07504 17.381 9.35773 19 12 19C14.6423 19 16.925 17.381 18 15.0349C16.925 12.5166 14.6423 12 12 12Z"
        fill="currentColor"
      />
    </IconSkeleton>
  )
}
