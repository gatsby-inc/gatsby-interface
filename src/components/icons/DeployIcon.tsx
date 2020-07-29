import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function DeployIcon(props: IconProps) {
  const theme = useTheme()
  return (
    <IconSkeleton {...props} iconName="DeployIcon">
      <path
        d="M7.95 5.70001H16.05C17.7897 5.70001 19.2 7.11031 19.2 8.85001V8.85001C19.2 10.5897 17.7897 12 16.05 12H13.8"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <path
        d="M13.8 18.3L7.95001 18.3C6.21031 18.3 4.8 16.8897 4.8 15.15V15.15C4.8 13.4103 6.21031 12 7.95001 12L9.75 12"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <path
        d="M11.1003 15.7544L13.6459 18.3L11.1003 20.8456"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <circle
        r="1.95"
        transform="matrix(1 0 0 -1 5.7 5.69999)"
        fill={theme.colors.purple[30]}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <path
        d="M13.95 12C13.95 10.923 13.077 10.05 12 10.05C10.923 10.05 10.05 10.923 10.05 12C10.05 13.077 10.923 13.95 12 13.95C13.077 13.95 13.95 13.077 13.95 12Z"
        fill={theme.colors.orange[70]}
        stroke={theme.colors.orange[70]}
        strokeWidth="1.5"
      />
      <circle
        r="2.7"
        transform="matrix(1 0 0 -1 18.3 18.3)"
        fill={theme.colors.purple[60]}
      />
    </IconSkeleton>
  )
}
