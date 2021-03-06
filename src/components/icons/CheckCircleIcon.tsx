import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function CheckCircleIcon(props: IconProps) {
  return (
    <IconSkeleton
      {...props}
      iconName="CheckCircleIcon"
      applyColorToStroke={false}
    >
      <circle cx="12" cy="12" r="10" />
      <path
        d="M9.87727 15.7413L7.38952 12.3449C7.1394 11.983 7.20585 11.4901 7.54289 11.2073L7.54289 11.2073C7.87994 10.9245 8.37685 10.9446 8.6899 11.2538L11.6026 14.2935C12.0767 14.7618 12.0453 15.5364 11.5349 15.9647L11.5349 15.9647C11.0244 16.3931 10.2561 16.2895 9.87727 15.7413Z"
        fill="white"
      />
      <path
        d="M10.0811 15.9563C9.56249 15.5212 9.51156 14.7414 9.96912 14.2425L15.748 7.94176C16.0414 7.6218 16.5348 7.58958 16.8674 7.86865L16.8674 7.86865C17.2 8.14773 17.2539 8.63917 16.9898 8.98374L11.7882 15.7689C11.3764 16.3062 10.5996 16.3914 10.0811 15.9563L10.0811 15.9563Z"
        fill="white"
      />
      <path
        d="M10.2123 12.8631C10.5034 13.2125 10.7169 13.4454 11.0856 13.0378C11.4544 12.6302 10.9692 14.0664 10.9692 14.0664L9.76593 13.6782L10.2123 12.8631Z"
        fill="white"
      />
    </IconSkeleton>
  )
}
