import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function FeaturesIcon(props: IconProps) {
  const theme = useTheme()

  return (
    <IconSkeleton {...props} iconName="FeaturesIcon">
      <path
        d="M18.9246 14.6967L16.8033 12.5754L13.2678 16.1109L15.3891 18.2322L18.9246 14.6967Z"
        fill={theme.colors.white}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.7071 6.00595L26.8891 4.81801L25.7011 7.99999L26.8891 11.182L23.7071 9.99403L20.5251 11.182L21.7131 7.99999L20.5251 4.81801L23.7071 6.00595Z"
        fill={theme.colors.purple[60]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.472 8L12 9.41421L10.5858 8.88624L9.17154 9.41421L9.69951 8L9.17154 6.58579L10.5858 7.11376L12 6.58579L11.472 8Z"
        fill={theme.colors.orange[70]}
        stroke={theme.colors.orange[70]}
        strokeWidth="1.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.8863 18L25.4143 19.4142L24.0001 18.8862L22.5858 19.4142L23.1138 18L22.5858 16.5858L24.0001 17.1138L25.4143 16.5858L24.8863 18Z"
        fill={theme.colors.orange[70]}
      />
      <path
        d="M13.2678 16.1109L15.3891 18.2322L7.25735 26.3639C6.67157 26.9497 5.72182 26.9497 5.13603 26.3639C4.55025 25.7782 4.55025 24.8284 5.13603 24.2426L13.2678 16.1109Z"
        fill={theme.colors.purple[20]}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
    </IconSkeleton>
  )
}
