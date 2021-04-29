import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function UnlimitedBandwidthIcon(props: IconProps) {
  return (
    <IconSkeleton
      {...props}
      iconName="UnlimitedBandwidthIcon"
      applyColorToStroke={false}
    >
      <path
        d="M12.6441 22C18.1669 22 22.6441 17.5228 22.6441 12C22.6441 6.47713 18.1669 1.99997 12.6441 1.99997C7.1212 1.99997 2.64404 6.47713 2.64404 12C2.64404 17.5228 7.1212 22 12.6441 22ZM6.64381 11.9018C6.64381 10.3102 7.95881 9.00001 9.59408 9.00001C10.7587 9.00001 11.6175 9.5823 12.1998 10.1403C12.3764 10.3026 12.506 10.4507 12.6395 10.6033L12.6462 10.611C12.7724 10.4557 12.8937 10.315 13.083 10.1403C13.6701 9.5726 14.5532 9.00001 15.6984 9.00001C17.3288 9.00001 18.6438 10.3102 18.6438 11.9018C18.6438 13.5128 17.3288 14.8035 15.6984 14.8035C14.5387 14.8035 13.6798 14.2406 13.0975 13.702C12.9034 13.5176 12.7724 13.3672 12.6462 13.2119C12.5007 13.3769 12.3697 13.5225 12.1901 13.702C11.6272 14.2261 10.7587 14.8035 9.59408 14.8035C7.95881 14.8035 6.64381 13.5128 6.64381 11.9018ZM9.59408 10.5722C8.8371 10.5722 8.22569 11.1787 8.22569 11.9018C8.22569 12.6442 8.8371 13.2313 9.59408 13.2313C10.1812 13.2313 10.6568 12.9596 11.0983 12.552C11.3555 12.3094 11.5302 12.0862 11.6612 11.9018C11.5253 11.7222 11.2924 11.4505 11.0983 11.2709C10.6956 10.8828 10.1812 10.5722 9.59408 10.5722ZM15.6984 13.2313C16.4505 13.2313 17.0571 12.6442 17.0571 11.9018C17.0571 11.1787 16.4505 10.5722 15.6984 10.5722C15.1016 10.5722 14.5775 10.8876 14.1893 11.2709C13.9912 11.4567 13.7931 11.6985 13.6786 11.8384C13.6585 11.8629 13.6409 11.8843 13.6264 11.9018C13.772 12.1056 13.9467 12.3191 14.1893 12.552C14.6163 12.9499 15.1016 13.2313 15.6984 13.2313Z"
        fill="currentColor"
      />
    </IconSkeleton>
  )
}