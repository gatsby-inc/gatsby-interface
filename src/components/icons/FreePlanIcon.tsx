import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function FreePlanIcon(props: IconProps) {
  const theme = useTheme()

  return (
    <IconSkeleton {...props} iconName="FreePlanIcon" stroke="none">
      <circle
        r="10.5"
        transform="matrix(1 0 0 -1 12 12)"
        stroke={theme.colors.orange[40]}
      />
      <circle
        r="2"
        transform="matrix(1 0 0 -1 19.5 4.5)"
        fill={theme.colors.orange[60]}
      />
      <circle cx="12" cy="12" r="2" fill={theme.colors.orange[60]} />
    </IconSkeleton>
  )
}
