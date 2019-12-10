import { fontSizes } from "../../utils/presets"
import { AvatarSize } from "./types"

export const DEFAULT_SIZE: AvatarSize = "M"

export const avatarSizeValues: Record<AvatarSize, string> = {
  XS: "20px",
  S: "24px",
  M: "32px",
  L: "48px",
  XL: "64px",
}

export const borderSizeValues: Record<AvatarSize, number> = {
  XS: 0.5,
  S: 1,
  M: 2,
  L: 3,
  XL: 4,
}

export const placeholderFontSizes: Record<AvatarSize, string> = {
  XS: fontSizes["4xs"],
  S: fontSizes["2xs"],
  M: fontSizes["xs"],
  L: fontSizes["m"],
  XL: fontSizes["l"],
}
