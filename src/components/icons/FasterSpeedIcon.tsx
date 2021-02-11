import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function FasterSpeedIcon(props: IconProps) {
  return (
    <IconSkeleton
      {...props}
      iconName="FasterSpeedIcon"
      applyColorToStroke={false}
    >
      <path
        d="M20.0789 14.1243C20.0789 12.7763 19.7202 11.5121 19.0929 10.4219L20.1166 8.25724C21.3866 9.87263 22.1442 11.91 22.1442 14.1243C22.1442 15.5776 21.8164 16.9601 21.2289 18.1969C20.8868 18.9171 20.1607 19.376 19.3634 19.376H5.92433C5.12704 19.376 4.40096 18.9171 4.05884 18.1969C3.4713 16.9601 3.14355 15.5776 3.14355 14.1243C3.14355 8.87739 7.39699 4.62396 12.6439 4.62396C14.0418 4.62396 15.3693 4.92591 16.5645 5.46815L14.2098 6.85444C13.7049 6.74622 13.181 6.68925 12.6439 6.68925C8.53761 6.68925 5.20884 10.018 5.20884 14.1243C5.20884 15.2646 5.46555 16.3449 5.92433 17.3107H19.3634C19.8222 16.3449 20.0789 15.2646 20.0789 14.1243ZM11.8021 14.5692C11.5811 14.4776 11.3803 14.3433 11.2113 14.1741C11.042 14.005 10.9078 13.8043 10.8162 13.5833C10.7246 13.3623 10.6774 13.1254 10.6774 12.8862C10.6774 12.647 10.7246 12.4101 10.8162 12.1891C10.9078 11.9682 11.042 11.7674 11.2113 11.5983L18.9385 6.44684L13.787 14.1741C13.618 14.3433 13.4172 14.4776 13.1962 14.5692C12.9753 14.6608 12.7384 14.708 12.4992 14.708C12.2599 14.708 12.0231 14.6608 11.8021 14.5692Z"
        fill="currentColor"
      />
    </IconSkeleton>
  )
}
