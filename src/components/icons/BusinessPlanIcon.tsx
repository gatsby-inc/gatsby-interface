import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function BusinessPlanIcon(props: IconProps) {
  const theme = useTheme()

  return (
    <IconSkeleton {...props} iconName="BusinessPlanIcon" stroke="none">
      <path
        d="M4.65776 4.54746C4.97371 4.23151 5.46242 4.05164 6.15119 4.06176C6.84211 4.07191 7.6906 4.27476 8.64761 4.67453C10.5592 5.47307 12.8081 7.01711 14.9211 9.13008C17.0341 11.243 18.5781 13.4919 19.3766 15.4036C19.7764 16.3606 19.9793 17.2091 19.9894 17.9C19.9995 18.5887 19.8197 19.0775 19.5037 19.3934C19.1878 19.7094 18.699 19.8892 18.0103 19.8791C17.3194 19.869 16.4709 19.6661 15.5139 19.2663C13.6022 18.4678 11.3533 16.9238 9.24037 14.8108C7.1274 12.6978 5.58336 10.449 4.78483 8.53732C4.38506 7.5803 4.18221 6.73181 4.17206 6.0409C4.16193 5.35212 4.34181 4.86341 4.65776 4.54746Z"
        stroke={theme.colors.purple[30]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3908 4.63159C19.7067 4.94754 19.8866 5.43625 19.8765 6.12502C19.8663 6.81594 19.6635 7.66443 19.2637 8.62144C18.4652 10.5331 16.9212 12.782 14.8082 14.8949C12.6952 17.0079 10.4463 18.5519 8.53471 19.3505C7.57769 19.7502 6.7292 19.9531 6.03829 19.9632C5.34951 19.9734 4.8608 19.7935 4.54485 19.4775C4.2289 19.1616 4.04903 18.6729 4.05915 17.9841C4.06931 17.2932 4.27215 16.4447 4.67192 15.4877C5.47046 13.576 7.0145 11.3272 9.12747 9.21421C11.2404 7.10124 13.4893 5.5572 15.4009 4.75866C16.358 4.35889 17.2065 4.15604 17.8974 4.14589C18.5861 4.13577 19.0748 4.31564 19.3908 4.63159Z"
        stroke={theme.colors.purple[30]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2" fill={theme.colors.purple[60]} />
      <circle cx="12" cy="7" r="1" fill={theme.colors.purple[60]} />
      <circle
        cx="7"
        cy="12"
        r="1"
        transform="rotate(-90 7 12)"
        fill={theme.colors.purple[60]}
      />
      <circle cx="12" cy="17" r="1" fill={theme.colors.purple[60]} />
      <circle
        cx="17"
        cy="12"
        r="1"
        transform="rotate(-90 17 12)"
        fill={theme.colors.purple[60]}
      />
      <circle
        r="10.5"
        transform="matrix(1 0 0 -1 12 12)"
        stroke={theme.colors.purple[30]}
      />
    </IconSkeleton>
  )
}
