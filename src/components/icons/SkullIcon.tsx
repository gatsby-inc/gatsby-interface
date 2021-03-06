import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function SkullIcon(props: IconProps) {
  const maskId = `SkullIcon__mask--${props.id || "noid"}`
  return (
    <IconSkeleton {...props} stroke="none" iconName="SkullIcon">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C16.4183 2 20 5.58172 20 10V14C20 15.7416 18.8869 17.2233 17.3333 17.7724V18C17.3333 20.2091 15.5425 22 13.3333 22H10.6667C8.45753 22 6.66667 20.2091 6.66667 18V17.7724C5.11308 17.2233 4 15.7416 4 14V10C4 5.58172 7.58172 2 12 2Z"
        fill="white"
      />
      <rect x="7" y="11" width="3" height="3" rx="1.5" fill="currentColor" />
      <rect x="14" y="11" width="3" height="3" rx="1.5" fill="currentColor" />
      <line
        x1="7"
        y1="18.5"
        x2="17"
        y2="18.5"
        strokeWidth="1.5"
        stroke="currentColor"
      />
      <mask id={maskId} fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C16.4183 2 20 5.58172 20 10V14C20 15.7416 18.8869 17.2233 17.3333 17.7724V18C17.3333 20.2091 15.5425 22 13.3333 22H10.6667C8.45753 22 6.66667 20.2091 6.66667 18V17.7724C5.11308 17.2233 4 15.7416 4 14V10C4 5.58172 7.58172 2 12 2Z"
        />
      </mask>
      <path
        d="M17.3333 17.7724L16.6668 15.8867L15.3333 16.358V17.7724H17.3333ZM6.66667 17.7724H8.66667V16.358L7.33316 15.8867L6.66667 17.7724ZM22 10C22 4.47715 17.5228 0 12 0V4C15.3137 4 18 6.68629 18 10H22ZM22 14V10H18V14H22ZM17.9998 19.6581C20.3275 18.8354 22 16.6156 22 14H18C18 14.8677 17.4463 15.6112 16.6668 15.8867L17.9998 19.6581ZM15.3333 17.7724V18H19.3333V17.7724H15.3333ZM15.3333 18C15.3333 19.1046 14.4379 20 13.3333 20V24C16.647 24 19.3333 21.3137 19.3333 18H15.3333ZM13.3333 20H10.6667V24H13.3333V20ZM10.6667 20C9.5621 20 8.66667 19.1046 8.66667 18H4.66667C4.66667 21.3137 7.35296 24 10.6667 24V20ZM8.66667 18V17.7724H4.66667V18H8.66667ZM2 14C2 16.6156 3.67249 18.8354 6.00017 19.6581L7.33316 15.8867C6.55367 15.6112 6 14.8677 6 14H2ZM2 10V14H6V10H2ZM12 0C6.47715 0 2 4.47715 2 10H6C6 6.68629 8.68629 4 12 4V0Z"
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
      <path
        d="M12 13L13.299 15.25H10.701L12 13Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </IconSkeleton>
  )
}
