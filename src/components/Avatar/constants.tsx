import { fontSizes } from "../../utils/presets"
import { AvatarSize } from "./types"

export const DEFAULT_SIZE: AvatarSize = "medium"

export const avatarSizeValues: Record<AvatarSize, string> = {
  small: "24px",
  medium: "32px",
  large: "48px",
  xlarge: "64px",
}

export const borderSizeValues: Record<AvatarSize, number> = {
  small: 1,
  medium: 2,
  large: 3,
  xlarge: 4,
}

export const placeholderFontSizes: Record<AvatarSize, string> = {
  small: fontSizes["2xs"],
  medium: fontSizes["xs"],
  large: fontSizes["m"],
  xlarge: fontSizes["l"],
}
