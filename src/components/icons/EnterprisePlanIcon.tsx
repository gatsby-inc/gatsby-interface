import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function EnterprisePlanIcon(props: IconProps) {
  const theme = useTheme()

  return (
    <IconSkeleton {...props} iconName="EnterprisePlanIcon" stroke="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={theme.colors.purple[20]}
      />
      <path
        d="M19.2093 8.18597C19.3953 8.51156 19.4418 8.93016 19.2558 9.4883C19.1162 9.99993 18.7907 10.6046 18.3255 11.2557C17.037 12.7733 15.4751 14.0354 13.7209 14.9767C11.7674 16.1395 9.76741 16.8371 8.1395 17.0232C7.39532 17.1627 6.74415 17.1162 6.18601 17.0232C5.62787 16.8371 5.25578 16.6046 5.06973 16.279C4.88369 15.9069 4.83718 15.4883 5.02322 14.9767C5.16276 14.4185 5.48834 13.8139 5.95345 13.2092C6.97671 11.9069 8.55811 10.5581 10.5581 9.44179C12.5116 8.279 14.5116 7.58132 16.093 7.39528C16.8837 7.30225 17.5814 7.30225 18.093 7.44179C18.6511 7.58132 19.0232 7.81388 19.2093 8.18597V8.18597Z"
        stroke={theme.colors.purple[50]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.02327 8.18597C5.20932 7.86039 5.58141 7.62783 6.09304 7.4883C6.65118 7.34876 7.30234 7.34876 8.09304 7.44178C9.67443 7.67434 11.6744 8.37202 13.6744 9.4883C15.6279 10.6511 17.2093 11.9999 18.1861 13.2557C18.6977 13.9069 19.0233 14.5116 19.1628 15.0232C19.3489 15.5813 19.3023 15.9999 19.1163 16.3255C18.8837 16.6976 18.5582 16.9302 18 17.0697C17.4884 17.2092 16.7907 17.2092 16 17.0697C14.4186 16.8836 12.4186 16.186 10.4186 15.0697C8.71042 14.1003 7.19652 12.823 5.9535 11.3022C5.48839 10.6511 5.11629 10.0464 4.97676 9.53481C4.83722 8.97667 4.83722 8.55806 5.06978 8.18597H5.02327Z"
        stroke={theme.colors.purple[40]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3488 12C15.3488 14.3256 14.9767 16.3721 14.3721 17.814C14.0465 18.5581 13.6744 19.1628 13.3023 19.5349C12.9302 19.9535 12.5116 20.1395 12.1395 20.1395C11.7209 20.1395 11.3488 19.9535 10.9767 19.5349C10.5581 19.1628 10.2326 18.6047 9.90697 17.814C9.22197 15.9538 8.8907 13.9819 8.93023 12C8.93023 9.67443 9.30232 7.62792 9.90697 6.18606C10.2326 5.44187 10.5581 4.83722 10.9767 4.46512C11.3488 4.04652 11.7209 3.86047 12.1395 3.86047C12.5116 3.86047 12.9302 4.04652 13.3023 4.46512C13.6744 4.83722 14.0465 5.39536 14.3721 6.18606C14.9767 7.62792 15.3023 9.72094 15.3023 12H15.3488Z"
        stroke={theme.colors.purple[50]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        fill={theme.colors.purple[60]}
      />
      <path
        d="M12 9.20922C12.5137 9.20922 12.9302 8.79274 12.9302 8.27899C12.9302 7.76523 12.5137 7.34875 12 7.34875C11.4862 7.34875 11.0698 7.76523 11.0698 8.27899C11.0698 8.79274 11.4862 9.20922 12 9.20922Z"
        fill={theme.colors.yellow[60]}
      />
      <path
        d="M12 16.6511C12.5137 16.6511 12.9302 16.2346 12.9302 15.7209C12.9302 15.2071 12.5137 14.7906 12 14.7906C11.4862 14.7906 11.0698 15.2071 11.0698 15.7209C11.0698 16.2346 11.4862 16.6511 12 16.6511Z"
        fill={theme.colors.green[50]}
      />
      <path
        d="M7.58135 11.9999C7.58135 11.4862 7.16487 11.0697 6.65112 11.0697C6.13737 11.0697 5.72089 11.4862 5.72089 11.9999C5.72089 12.5137 6.13737 12.9302 6.65112 12.9302C7.16487 12.9302 7.58135 12.5137 7.58135 11.9999Z"
        fill={theme.colors.teal[60]}
      />
      <path
        d="M18.2791 11.9999C18.2791 11.4862 17.8626 11.0697 17.3489 11.0697C16.8351 11.0697 16.4186 11.4862 16.4186 11.9999C16.4186 12.5137 16.8351 12.9302 17.3489 12.9302C17.8626 12.9302 18.2791 12.5137 18.2791 11.9999Z"
        fill={theme.colors.orange[70]}
      />
    </IconSkeleton>
  )
}
