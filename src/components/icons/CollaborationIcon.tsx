import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function CollaborationIcon(props: IconProps) {
  const theme = useTheme()
  return (
    <IconSkeleton {...props} iconName="CollaborationIcon">
      <circle
        cx="16"
        cy="6"
        r="1"
        fill={theme.colors.purple[40]}
        stroke={theme.colors.purple[40]}
        strokeWidth="1.5"
      />
      <circle
        cx="9"
        cy="10"
        r="1"
        fill={theme.colors.purple[30]}
        stroke={theme.colors.purple[30]}
        strokeWidth="1.5"
      />
      <circle
        cx="23"
        cy="10"
        r="1"
        fill={theme.colors.blue[50]}
        stroke={theme.colors.blue[50]}
        strokeWidth="1.5"
      />
      <path
        d="M7.75 27.25L5.736 24.733C5.09773 23.9351 4.75 22.9438 4.75 21.922V16.75C4.75 16.3522 4.90804 15.9706 5.18934 15.6893C5.47064 15.408 5.85218 15.25 6.25 15.25V15.25C6.64782 15.25 7.02936 15.408 7.31066 15.6893C7.59196 15.9706 7.75 16.3522 7.75 16.75V20.5"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 27.114V24.114C12.2504 23.2242 11.987 22.3542 11.493 21.614L10.351 19.9C10.2536 19.7375 10.1242 19.5965 9.97062 19.4855C9.81708 19.3745 9.64262 19.2958 9.45778 19.2542C9.27294 19.2126 9.08159 19.2089 8.8953 19.2435C8.70901 19.278 8.53166 19.3499 8.374 19.455V19.455C8.08936 19.6447 7.884 19.9319 7.79668 20.2626C7.70935 20.5933 7.7461 20.9446 7.9 21.25L9.25 23.5"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.25 27.25L26.264 24.733C26.9023 23.9351 27.25 22.9438 27.25 21.922V16.75C27.25 16.3522 27.092 15.9706 26.8107 15.6893C26.5294 15.408 26.1478 15.25 25.75 15.25C25.3522 15.25 24.9706 15.408 24.6893 15.6893C24.408 15.9706 24.25 16.3522 24.25 16.75V20.5"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.75 27.114V24.114C19.7496 23.2242 20.013 22.3542 20.507 21.614L21.649 19.9C21.7464 19.7375 21.8758 19.5965 22.0294 19.4855C22.1829 19.3745 22.3574 19.2958 22.5422 19.2542C22.7271 19.2126 22.9184 19.2089 23.1047 19.2435C23.291 19.278 23.4683 19.3499 23.626 19.455C23.9106 19.6447 24.116 19.9319 24.2033 20.2626C24.2907 20.5933 24.2539 20.9446 24.1 21.25L22.75 23.5"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="16"
        cy="15"
        r="4"
        fill={theme.colors.purple[30]}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
    </IconSkeleton>
  )
}
