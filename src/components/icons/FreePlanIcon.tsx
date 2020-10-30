import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function FreePlanIcon(props: IconProps) {
  const theme = useTheme()
  const clipId = `FreePlanIcon__clip--${props.id || "noid"}`

  return (
    <IconSkeleton {...props} iconName="FreePlanIcon" stroke="none">
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M12 23.6667C18.4433 23.6667 23.6667 18.4434 23.6667 12C23.6667 5.55672 18.4433 0.333374 12 0.333374C5.55668 0.333374 0.333336 5.55672 0.333336 12C0.333336 18.4434 5.55668 23.6667 12 23.6667Z"
          stroke={theme.colors.blue[20]}
        />
        <path
          d="M12 14.6667C13.4728 14.6667 14.6667 13.4728 14.6667 12C14.6667 10.5273 13.4728 9.33337 12 9.33337C10.5272 9.33337 9.33334 10.5273 9.33334 12C9.33334 13.4728 10.5272 14.6667 12 14.6667Z"
          fill={theme.colors.blue[60]}
        />
        <path
          d="M20.6667 6.00004C21.403 6.00004 22 5.40309 22 4.66671C22 3.93033 21.403 3.33337 20.6667 3.33337C19.9303 3.33337 19.3333 3.93033 19.3333 4.66671C19.3333 5.40309 19.9303 6.00004 20.6667 6.00004Z"
          fill={theme.colors.blue[60]}
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </IconSkeleton>
  )
}
