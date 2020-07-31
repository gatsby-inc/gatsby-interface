import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function ProviderIcon(props: IconProps) {
  const theme = useTheme()
  return (
    <IconSkeleton {...props} iconName="ProviderIcon">
      <line
        x1="13.5326"
        y1="13.1739"
        x2="13.5326"
        y2="16.3043"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <line
        x1="15.4498"
        y1="7.48951"
        x2="18.2168"
        y2="4.72257"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <line
        x1="8.36504"
        y1="6.4651"
        x2="11.5704"
        y2="8.70953"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <line
        x1="15.4085"
        y1="11.1608"
        x2="18.6139"
        y2="13.4052"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <line
        x1="5.69501"
        y1="17.2443"
        x2="11.1733"
        y2="11.7661"
        stroke={theme.colors.blue[50]}
        strokeWidth="1.5"
      />
      <circle
        cx="13.1739"
        cy="10.0435"
        r="3.13043"
        fill={theme.colors.purple[30]}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <circle
        cx="19.4348"
        cy="13.9565"
        r="1.56522"
        fill={theme.colors.purple[60]}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <circle
        cx="6.91304"
        cy="5.73913"
        r="1.56522"
        fill={theme.colors.white}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <circle
        cx="13.3696"
        cy="17.8696"
        r="1.56522"
        fill={theme.colors.white}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
      <circle
        cx="4.56522"
        cy="18.6522"
        r="1.56522"
        fill={theme.colors.blue[50]}
        stroke={theme.colors.blue[50]}
        strokeWidth="1.5"
      />
      <circle
        cx="18.6522"
        cy="4.56522"
        r="1.56522"
        fill={theme.colors.white}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
    </IconSkeleton>
  )
}
