import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function GoogleIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="GoogleIcon" fill="none" stroke="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6 12.2273C21.6 11.5182 21.5364 10.8364 21.4182 10.1818H12V14.05H17.3818C17.15 15.3 16.4455 16.3591 15.3864 17.0682V19.5773H18.6182C20.5091 17.8364 21.6 15.2727 21.6 12.2273Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 22C14.7001 22 16.9637 21.1046 18.6183 19.5773L15.3864 17.0682C14.491 17.6682 13.3455 18.0228 12.0001 18.0228C9.39554 18.0228 7.19099 16.2637 6.40463 13.9H3.06372V16.4909C4.70918 19.7591 8.09099 22 12.0001 22Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.40455 13.9C6.20455 13.3 6.09091 12.6591 6.09091 12C6.09091 11.3409 6.20455 10.7 6.40455 10.1V7.50909H3.06364C2.38636 8.85909 2 10.3864 2 12C2 13.6136 2.38636 15.1409 3.06364 16.4909L6.40455 13.9Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 5.97727C13.4683 5.97727 14.7864 6.48182 15.8228 7.47273L18.691 4.60455C16.9592 2.99091 14.6955 2 12.0001 2C8.09099 2 4.70918 4.24091 3.06372 7.50909L6.40463 10.1C7.19099 7.73636 9.39554 5.97727 12.0001 5.97727Z"
        fill="#EA4335"
      />
    </IconSkeleton>
  )
}
