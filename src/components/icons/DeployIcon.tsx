import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function DeployIcon(props: IconProps) {
  const theme = useTheme()
  return (
    <IconSkeleton {...props} iconName="DeployIcon">
      <path
        d="M11.5 9H20.5C22.433 9 24 10.567 24 12.5V12.5C24 14.433 22.433 16 20.5 16H18"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <path
        d="M18 23L11.5 23C9.567 23 8 21.433 8 19.5V19.5C8 17.567 9.567 16 11.5 16L13.5 16"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <path
        d="M15.0003 20.1716L17.8287 23L15.0003 25.8284"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <circle
        r="2.25"
        transform="matrix(1 0 0 -1 9 9)"
        fill={theme.colors.purple[30]}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <circle
        r="2.25"
        transform="matrix(1 0 0 -1 16 16)"
        fill={theme.colors.orange[70]}
        stroke={theme.colors.orange[70]}
        strokeWidth="1.5"
      />
      <circle
        r="3"
        transform="matrix(1 0 0 -1 23 23)"
        fill={theme.colors.purple[60]}
      />
    </IconSkeleton>
  )
}
