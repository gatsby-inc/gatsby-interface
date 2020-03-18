import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

// TODO consolidate with ./CheckCircleIcon
// this one here already follows the Material Design icon grid
export default function SuccessIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="SuccessIcon" applyColorToStroke={false}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10zm-11.3557 4.2175c-.2986-.0436-.5802-.2059-.76709-.4763l-2.48775-3.3963c-.25012-.362-.18368-.8548.15337-1.1376.33705-.2829.83396-.2627 1.14701.0465l1.76846 1.8456c.1645.1481.3187.207.5228.0394l4.7666-5.19716c.2935-.31996.7868-.35219 1.1194-.07311.3326.27907.3866.77052.1224 1.11509L11.788 15.7688c-.2786.3633-.724.5199-1.1437.4487z"
      />
    </IconSkeleton>
  )
}
