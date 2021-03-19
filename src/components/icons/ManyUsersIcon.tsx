import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function ManyUsersIcon(props: IconProps) {
  return (
    <IconSkeleton
      {...props}
      iconName="ManyUsersIcon"
      applyColorToStroke={false}
    >
      <g clipPath="url(#ManyUsersIcon-clip0)">
        <path
          d="M10.3672 5.66687C9.16229 6.37929 8.3386 7.66816 8.27575 9.15387C7.9415 9.2725 7.58164 9.33708 7.2067 9.33708C5.44187 9.33708 4.01119 7.90639 4.01119 6.14156C4.01119 4.37673 5.44187 2.94604 7.2067 2.94604C8.81024 2.94604 10.1379 4.12716 10.3672 5.66687ZM12.5326 6.14156C11.6427 6.14156 10.8378 6.50528 10.2584 7.09215C10.1742 7.17753 10.0946 7.26764 10.0203 7.36204C9.59236 7.90565 9.33705 8.59154 9.33705 9.33708C9.33705 10.6429 10.1203 11.7658 11.2426 12.2616L11.2425 12.2617C11.6204 12.4286 12.0367 12.5243 12.4745 12.5321C12.4938 12.5324 12.5132 12.5326 12.5326 12.5326C12.6153 12.5326 12.6973 12.5294 12.7784 12.5233C12.8372 12.5188 12.8955 12.5127 12.9534 12.5051C14.5193 12.2991 15.7281 10.9593 15.7281 9.33708C15.7281 7.57224 14.2974 6.14156 12.5326 6.14156ZM21.0539 6.14156C21.0539 7.90639 19.6232 9.33708 17.8584 9.33708C17.4833 9.33708 17.1233 9.27244 16.7889 9.15371C16.726 7.66823 15.9025 6.37956 14.6979 5.66711C14.9271 4.12728 16.2548 2.94604 17.8584 2.94604C19.6232 2.94604 21.0539 4.37673 21.0539 6.14156ZM12.2611 13.5995C12.3509 13.5983 12.4412 13.5978 12.5318 13.5978C12.5319 13.5978 12.5321 13.5978 12.5323 13.5978C12.6119 13.5978 12.6913 13.5982 12.7703 13.5991C12.985 13.6016 13.1971 13.6076 13.4065 13.6178C15.8441 13.737 17.8989 14.43 18.9236 16.8305C17.7785 19.3295 15.347 21.054 12.5326 21.054C10.1154 21.054 7.98071 19.782 6.70081 17.8398C6.70071 17.8398 6.70061 17.8397 6.7005 17.8397C6.49014 17.5205 6.30287 17.1832 6.14123 16.8305C6.99133 14.8391 8.55037 14.0228 10.4487 13.7344L10.4487 13.7343C11.025 13.6468 11.6326 13.6079 12.2611 13.5995ZM19.9894 17.0598C21.3798 16.3202 22.5071 15.113 23.1844 13.6349C22.0393 10.9525 19.6078 10.4022 16.7934 10.4022C16.7482 10.4022 16.7032 10.4024 16.6583 10.4027C16.4152 11.3469 15.8565 12.1645 15.1013 12.7362C15.6794 12.8433 16.2414 13.0013 16.7731 13.2292C18.1197 13.8066 19.219 14.8112 19.9024 16.4123L20.0875 16.8457L19.9894 17.0598ZM8.41679 10.4427C8.02355 10.4141 7.61924 10.4022 7.2067 10.4022C4.39224 10.4022 1.96078 10.9525 0.815674 13.6349C1.69605 15.5562 3.33678 17.0197 5.32733 17.5937C5.27375 17.4884 5.22225 17.3819 5.17288 17.2742L4.97655 16.8457L5.16159 16.4123C5.84506 14.8112 6.94432 13.8066 8.29097 13.2292C8.82275 13.0012 9.38492 12.8432 9.96318 12.7361C9.21877 12.1725 8.66526 11.37 8.41679 10.4427Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="ManyUsersIcon-clip0">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(-0.000244141)"
          />
        </clipPath>
      </defs>
    </IconSkeleton>
  )
}
