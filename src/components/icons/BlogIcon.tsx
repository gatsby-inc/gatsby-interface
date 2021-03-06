import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function BlogIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="BlogIcon">
      <path
        d="M8.49188 11.265L7.43188 15.508L11.6739 14.447L18.0379 8.083L14.8559 4.901L8.49188 11.265Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.751 4.37097L22.811 5.43097C22.9504 5.57027 23.061 5.73567 23.1364 5.91772C23.2119 6.09978 23.2507 6.29491 23.2507 6.49197C23.2507 6.68904 23.2119 6.88417 23.1364 7.06622C23.061 7.24827 22.9504 7.41367 22.811 7.55297L19.5 10.863"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.038 8.083L21.751 4.371C22.0322 4.0897 22.1901 3.70824 22.1901 3.3105C22.1901 2.91275 22.0322 2.53129 21.751 2.25L20.69 1.189C20.4087 0.90779 20.0272 0.749817 19.6295 0.749817C19.2317 0.749817 18.8502 0.90779 18.569 1.189L14.856 4.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 14.25V21.75C18.75 22.1478 18.592 22.5294 18.3107 22.8107C18.0294 23.092 17.6478 23.25 17.25 23.25H2.25C1.85218 23.25 1.47064 23.092 1.18934 22.8107C0.908035 22.5294 0.75 22.1478 0.75 21.75V6.75C0.75 6.35218 0.908035 5.97064 1.18934 5.68934C1.47064 5.40804 1.85218 5.25 2.25 5.25H9.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconSkeleton>
  )
}
