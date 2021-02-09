import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function ProRequestsIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="ProRequestsIcon">
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5.66675"
          y="14.5"
          width="2.66667"
          height="4"
          fill="currentColor"
          strokeWidth="0"
        />
        <rect
          x="9.00024"
          y="11.5"
          width="2.66667"
          height="7"
          fill="currentColor"
          strokeWidth="0"
        />
        <rect
          x="12.3335"
          y="8.5"
          width="2.66667"
          height="10"
          fill="#48434F"
          strokeWidth="0"
        />
        <rect
          x="15.6667"
          y="5.5"
          width="2.66667"
          height="13"
          fill="#D9D7E0"
          strokeWidth="0"
        />
      </svg>
    </IconSkeleton>
  )
}
