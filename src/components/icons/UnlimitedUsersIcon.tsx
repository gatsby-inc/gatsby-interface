import * as React from "react"
import IconSkeleton from "./IconSkeleton"
import { IconProps } from "./types"

export default function UnlimitedUsersIcon(props: IconProps) {
  return (
    <IconSkeleton {...props} iconName="UnlimitedUsersIcon">
      <path
        d="M12.6438 11.4367C14.9672 11.4367 16.8507 9.55316 16.8507 7.22976C16.8507 4.90635 14.9672 3.02286 12.6438 3.02286C10.3204 3.02286 8.43688 4.90635 8.43688 7.22976C8.43688 9.55316 10.3204 11.4367 12.6438 11.4367ZM4.22998 16.9081C4.22998 14.6762 6.07401 12.839 8.36713 12.839C10.0002 12.839 11.2046 13.6555 12.0212 14.438C12.2687 14.6655 12.4505 14.8733 12.6377 15.0872L12.6472 15.0981C12.8241 14.8803 12.9942 14.683 13.2596 14.438C14.0829 13.6419 15.3214 12.839 16.9272 12.839C19.2136 12.839 21.0576 14.6762 21.0576 16.9081C21.0576 19.1672 19.2136 20.9772 16.9272 20.9772C15.3009 20.9772 14.0965 20.1878 13.28 19.4325C13.0078 19.174 12.8241 18.963 12.6472 18.7453C12.443 18.9766 12.2593 19.1808 12.0076 19.4325C11.2182 20.1674 10.0002 20.9772 8.36713 20.9772C6.07401 20.9772 4.22998 19.1672 4.22998 16.9081ZM8.36713 15.0436C7.30563 15.0436 6.44826 15.8942 6.44826 16.9081C6.44826 17.9492 7.30563 18.7725 8.36713 18.7725C9.19048 18.7725 9.85733 18.3915 10.4765 17.8199C10.8372 17.4796 11.0821 17.1666 11.2659 16.9081C11.0753 16.6563 10.7487 16.2752 10.4765 16.0235C9.91176 15.4791 9.19048 15.0436 8.36713 15.0436ZM16.9272 18.7725C17.9819 18.7725 18.8325 17.9492 18.8325 16.9081C18.8325 15.8942 17.9819 15.0436 16.9272 15.0436C16.0903 15.0436 15.3554 15.4859 14.811 16.0235C14.5332 16.2839 14.2554 16.6231 14.0949 16.8192C14.0666 16.8536 14.042 16.8837 14.0217 16.9081C14.2258 17.1939 14.4708 17.4933 14.811 17.8199C15.4098 18.3778 16.0903 18.7725 16.9272 18.7725Z"
        fill="currentColor"
        strokeWidth="0"
      />
    </IconSkeleton>
  )
}
