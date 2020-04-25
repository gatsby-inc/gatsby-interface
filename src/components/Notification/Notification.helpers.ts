import { SuccessIcon } from "../icons"
import { MdWarning, MdError } from "react-icons/md"
import { NotificationTone, NotificationVariant } from "./types"
import { ThemeCss } from "../../theme"

export const iconByTone: Record<
  NotificationTone,
  React.ComponentType<{}> | null
> = {
  BRAND: null,
  SUCCESS: SuccessIcon,
  DANGER: MdError,
  WARNING: MdWarning,
  NEUTRAL: null,
}

type GetVariantStylesFn = (tone: NotificationTone) => ThemeCss

const variants: Record<NotificationVariant, GetVariantStylesFn> = {
  PRIMARY: tone => {
    return theme => [
      {
        background: theme.colors.white,
        borderLeft: `${theme.space[2]} solid ${theme.tones[tone].medium}`,
        paddingTop: theme.space[5],
        paddingBottom: theme.space[5],
        paddingLeft: theme.space[6],
        paddingRight: theme.space[7],
      },
    ]
  },
  SECONDARY: tone => {
    return theme => ({
      background: theme.tones[tone].superLight,
      borderRadius: theme.radii[2],
      boxShadow: `0 0 0 1px ${theme.tones[tone].light} inset`,
      padding: `${theme.space[5]} ${theme.space[7]}`,
      [theme.mediaQueries.desktop]: {
        padding: `${theme.space[7]} ${theme.space[9]}`,
      },
    })
  },
  SOLID: tone => {
    return theme => [
      {
        background: theme.tones[tone].dark,
        borderRadius: theme.radii[2],
        color: theme.colors.white,
        padding: `${theme.space[5]} ${theme.space[7]}`,
        [theme.mediaQueries.desktop]: {
          padding: `${theme.space[7]} ${theme.space[9]}`,
        },
      },
      tone === `WARNING` && {
        background: theme.colors.yellow[50],
      },
      tone === `SUCCESS` && {
        background: theme.colors.green[80],
      },
    ]
  },
}

export function getNotificationVariantStyles(
  variant: NotificationVariant,
  tone: NotificationTone
) {
  return variants[variant](tone)
}
