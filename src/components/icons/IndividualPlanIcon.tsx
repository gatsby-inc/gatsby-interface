import * as React from "react"
import { useTheme } from "../ThemeProvider"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function IndividualPlanIcon(props: IconProps) {
  const theme = useTheme()

  return (
    <IconSkeleton {...props} iconName="IndividualPlanIcon">
      <path
        d="M3.80897 3.67416C4.21346 3.26966 4.8202 3 5.56177 3C6.37076 3.06742 7.382 3.33708 8.39324 3.74157C10.5505 4.61798 13.1123 6.37079 15.4045 8.73034C17.764 11.0899 19.4494 13.5843 20.3932 15.7416C20.7977 16.7528 21.0674 17.764 21.0674 18.573C21.0674 19.3146 20.8651 19.9213 20.4607 20.3258C20.0562 20.7303 19.4494 21 18.6404 21C17.8989 20.9326 16.8876 20.7303 15.809 20.2584C13.2036 19.043 10.8485 17.351 8.86515 15.2697C6.5056 12.9101 4.8202 10.4157 3.87638 8.32584C3.40447 7.24719 3.20222 6.30337 3.20222 5.49438C3.20222 4.68539 3.40447 4.07865 3.80897 3.67416V3.67416Z"
        stroke={theme.colors.orange[40]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3258 3.7416C20.7303 4.14609 21 4.75283 21 5.56182C20.9326 6.37081 20.7303 7.31463 20.2584 8.39328C19.0502 11.0227 17.3578 13.4012 15.2697 15.4045C12.9101 17.6967 10.4157 19.4495 8.32584 20.3259C7.24719 20.7978 6.30337 21 5.49438 21C4.68539 21 4.07865 20.8652 3.67416 20.4607C3.26966 20.0562 3 19.4495 3 18.6405C3.06742 17.8315 3.33708 16.8877 3.74157 15.809C4.61798 13.6517 6.37079 11.1573 8.73034 8.79778C11.0899 6.43823 13.5843 4.75283 15.7416 3.87643C16.7528 3.40452 17.764 3.20227 18.573 3.20227C19.3146 3.20227 19.9213 3.3371 20.3258 3.7416V3.7416Z"
        stroke={theme.colors.orange[40]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2303 12.0337C14.2303 13.2468 13.2469 14.2303 12.0337 14.2303C10.8205 14.2303 9.83707 13.2468 9.83707 12.0337C9.83707 10.8205 10.8205 9.83704 12.0337 9.83704C13.2469 9.83704 14.2303 10.8205 14.2303 12.0337Z"
        fill={theme.colors.magenta[50]}
        stroke={theme.colors.magenta[50]}
      />
      <path
        d="M12.882 5.96636C12.882 6.43487 12.5022 6.81467 12.0337 6.81467C11.5652 6.81467 11.1854 6.43487 11.1854 5.96636C11.1854 5.49785 11.5652 5.11804 12.0337 5.11804C12.5022 5.11804 12.882 5.49785 12.882 5.96636Z"
        fill={theme.colors.magenta[50]}
        stroke={theme.colors.magenta[50]}
      />
      <path
        d="M12.882 18.7753C12.882 19.2438 12.5022 19.6236 12.0337 19.6236C11.5652 19.6236 11.1854 19.2438 11.1854 18.7753C11.1854 18.3068 11.5652 17.927 12.0337 17.927C12.5022 17.927 12.882 18.3068 12.882 18.7753Z"
        fill={theme.colors.magenta[50]}
        stroke={theme.colors.magenta[50]}
      />
    </IconSkeleton>
  )
}
