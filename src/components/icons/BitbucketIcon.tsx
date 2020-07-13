import React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function BitbucketIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="BitbucketIcon" fill="none" stroke="none">
      <g clipPath="url(#BitbucketIcon__clip)">
        <path
          d="M2.64036 2.8875C2.5481 2.8863 2.45669 2.90556 2.37256 2.94393C2.28843 2.9823 2.21362 3.03885 2.15337 3.10961C2.09312 3.18037 2.0489 3.26363 2.02381 3.35353C1.99873 3.44344 1.99338 3.53782 2.00815 3.63004L4.69189 20.1258C4.72533 20.3276 4.82794 20.5111 4.98172 20.644C5.13549 20.7768 5.33058 20.8506 5.53273 20.8523H18.4077C18.5592 20.8543 18.7064 20.8011 18.8225 20.7024C18.9385 20.6037 19.0157 20.4661 19.0399 20.3146L21.7237 3.63324C21.7384 3.54102 21.7331 3.44664 21.708 3.35673C21.6829 3.26683 21.6387 3.18357 21.5784 3.11281C21.5182 3.04205 21.4434 2.9855 21.3592 2.94713C21.2751 2.90876 21.1837 2.8895 21.0914 2.8907L2.64036 2.8875ZM13.9411 14.8096H9.83177L8.71908 8.92378H14.9369L13.9411 14.8096Z"
          fill="#2684FF"
        />
        <path
          d="M20.8702 8.92383H14.9369L13.9411 14.8097H9.83178L4.97955 20.6411C5.13335 20.7758 5.32943 20.8506 5.53274 20.8523H18.4109C18.5624 20.8543 18.7096 20.8011 18.8257 20.7024C18.9417 20.6037 19.0189 20.4661 19.0431 20.3147L20.8702 8.92383Z"
          fill="url(#BitbucketIcon__gradient)"
        />
      </g>
      <defs>
        <linearGradient
          id="BitbucketIcon__gradient"
          x1="22.2421"
          y1="10.5721"
          x2="12.3445"
          y2="18.2014"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
        <clipPath id="BitbucketIcon__clip">
          <rect
            width="20"
            height="18"
            fill="white"
            transform="translate(2 3)"
          />
        </clipPath>
      </defs>
    </IconSkeleton>
  )
}
