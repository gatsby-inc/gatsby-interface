import { ThemeCss } from "../../theme"
import { BadgeTone, BadgeVariant } from "./types"

type GetVariantStylesFn = (tone: BadgeTone) => ThemeCss

const variants: Record<BadgeVariant, GetVariantStylesFn> = {
  STATUS: tone => {
    return theme => [
      {
        background: theme.tones[tone].superLight,
        color: theme.tones[tone].dark,
      },
    ]
  },
  PILL: tone => {
    return theme => ({
      background: theme.tones[tone].dark,
      color: theme.colors.white,
    })
  },
}

export function getBadgeVariantStyles(variant: BadgeVariant, tone: BadgeTone) {
  return variants[variant](tone)
}
