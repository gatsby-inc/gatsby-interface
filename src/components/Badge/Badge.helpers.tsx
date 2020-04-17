import { ThemeCss } from "../../theme"
import { BadgeTone, BadgeVariant } from "./types"

type GetVariantStylesFn = (tone: BadgeTone) => ThemeCss

const variants: Record<BadgeVariant, GetVariantStylesFn> = {
  STATUS: tone => {
    return theme => [
      {
        boxShadow: `0 0 1px 0 ${theme.tones[tone].light} inset`,
        background: theme.tones[tone].superLight,
        color: theme.tones[tone].dark,
      },
    ]
  },
  PILL: tone => {
    return theme => [
      {
        background: theme.tones[tone].dark,
        color: theme.colors.white,
      },
      tone === `WARNING` && {
        background: theme.colors.yellow[50],
        color: theme.colors.blackFade[70],
      },
      tone === `SUCCESS` && {
        background: theme.colors.green[80],
      },
    ]
  },
}

export function getBadgeVariantStyles(variant: BadgeVariant, tone: BadgeTone) {
  return variants[variant](tone)
}
