/** @jsx jsx */
import { jsx } from "@emotion/core"
import { css } from "@emotion/core"
import { palette } from "../../utils/presets/colors"
import { AvatarSize } from "./types"
import {
  avatarSizeValues,
  placeholderFontSizes,
  borderSizeValues,
} from "./constants"

const baseCss = css({
  background: palette.grey[200],
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexShrink: 0,
  overflow: "hidden",
  color: palette.grey[600],
})

export type AvatarSkeletonProps = JSX.IntrinsicElements["span"] & {
  size: AvatarSize;
  borderColor?: string | null;
}

// TODO fit placeholder text to its avatar size for cases like +99
export default function AvatarSkeleton({
  size,
  borderColor,
  ...rest
}: AvatarSkeletonProps) {
  return (
    <span
      css={[
        baseCss,
        css({
          width: avatarSizeValues[size],
          height: avatarSizeValues[size],
          fontSize: placeholderFontSizes[size],
          border: borderColor
            ? `${borderSizeValues[size]}px solid ${borderColor}`
            : undefined,
        }),
      ]}
      {...rest}
    />
  )
}
