import styled from "@emotion/styled"
import { palette } from "../../utils/presets/colors"
import { AvatarSize } from "./types"
import {
  avatarSizeValues,
  placeholderFontSizes,
  borderSizeValues,
} from "./constants"

// TODO fit placeholder text to its avatar size for cases like +99
const AvatarSkeleton = styled.span<{
  size: AvatarSize
  borderColor?: string | null
}>(
  {
    background: palette.grey[200],
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexShrink: 0,
    overflow: "hidden",
    color: palette.grey[600],
  },
  ({ size, borderColor }) => ({
    width: avatarSizeValues[size],
    height: avatarSizeValues[size],
    fontSize: placeholderFontSizes[size],
    border: borderColor
      ? `${borderSizeValues[size]}px solid ${borderColor}`
      : undefined,
  })
)

export default AvatarSkeleton
