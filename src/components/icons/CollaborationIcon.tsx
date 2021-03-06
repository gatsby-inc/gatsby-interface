import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"
import { useTheme } from "../ThemeProvider"

export default function CollaborationIcon(props: IconProps) {
  const theme = useTheme()
  return (
    <IconSkeleton {...props} iconName="CollaborationIcon">
      <circle
        cx="12.1011"
        cy="3.80899"
        r="0.808989"
        fill={theme.colors.purple[40]}
        stroke={theme.colors.purple[40]}
        strokeWidth="1.5"
      />
      <circle
        cx="6.4382"
        cy="7.04495"
        r="0.808989"
        fill={theme.colors.purple[30]}
        stroke={theme.colors.purple[30]}
        strokeWidth="1.5"
      />
      <circle
        cx="17.7641"
        cy="7.04495"
        r="0.808989"
        fill={theme.colors.blue[50]}
        stroke={theme.colors.blue[50]}
        strokeWidth="1.5"
      />
      <path
        d="M5.42697 21L3.79766 18.9638C3.28131 18.3183 3 17.5163 3 16.6897V12.5056C3 12.1838 3.12785 11.8751 3.35542 11.6475C3.58299 11.42 3.89165 11.2921 4.21348 11.2921V11.2921C4.53532 11.2921 4.84397 11.42 5.07155 11.6475C5.29912 11.8751 5.42697 12.1838 5.42697 12.5056V15.5393"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.06743 20.89V18.463C9.06775 17.7431 8.85463 17.0393 8.45502 16.4405L7.53116 15.0539C7.45233 14.9225 7.34764 14.8084 7.22343 14.7186C7.09923 14.6288 6.95808 14.5651 6.80855 14.5315C6.65902 14.4978 6.50422 14.4949 6.35351 14.5228C6.2028 14.5507 6.05933 14.6089 5.93179 14.6939V14.6939C5.70152 14.8474 5.53538 15.0798 5.46474 15.3473C5.39409 15.6148 5.42383 15.899 5.54833 16.1461L6.64046 17.9663"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.7753 21L20.4046 18.9638C20.9209 18.3183 21.2022 17.5163 21.2023 16.6897V12.5056C21.2023 12.1838 21.0744 11.8751 20.8468 11.6475C20.6193 11.42 20.3106 11.2921 19.9888 11.2921C19.6669 11.2921 19.3583 11.42 19.1307 11.6475C18.9031 11.8751 18.7753 12.1838 18.7753 12.5056V15.5393"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1348 20.89V18.463C15.1345 17.7431 15.3476 17.0393 15.7472 16.4405L16.6711 15.0539C16.7499 14.9225 16.8546 14.8084 16.9788 14.7186C17.103 14.6288 17.2442 14.5651 17.3937 14.5315C17.5432 14.4978 17.698 14.4949 17.8487 14.5228C17.9994 14.5507 18.1429 14.6089 18.2705 14.6939C18.5007 14.8474 18.6669 15.0798 18.7375 15.3473C18.8082 15.6148 18.7784 15.899 18.6539 16.1461L17.5618 17.9663"
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12.1011"
        cy="11.0899"
        r="3.23595"
        fill={theme.colors.purple[30]}
        stroke={theme.colors.purple[60]}
        strokeWidth="1.5"
      />
    </IconSkeleton>
  )
}
