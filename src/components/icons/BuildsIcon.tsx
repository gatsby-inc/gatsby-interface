import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function BuildsIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="BuildsIcon">
      <rect
        y="0.999935"
        width="9.54724"
        height="9.54724"
        transform="matrix(0.866044 0.499967 -0.866044 0.499967 12.8699 11.55)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        y="0.999935"
        width="9.54724"
        height="9.54724"
        transform="matrix(0.866044 0.499967 -0.866044 0.499967 12.8664 7)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        y="0.999935"
        width="9.54724"
        height="9.54724"
        transform="matrix(0.866044 0.499967 -0.866044 0.499967 12.8699 2)"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="11.4737"
      />
    </IconSkeleton>
  )
}
