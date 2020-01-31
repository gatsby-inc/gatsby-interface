import styled from "@emotion/styled"
import { Success, Danger } from "../../assets"
import { MdWarning } from "react-icons/md"
import { NotificationTone, NotificationVariant } from "./types"
import { Theme, ThemeCss } from "../../theme"
import { cardFrameCss } from "../../stylesheets/card"

const Warning = styled(MdWarning)(({ theme }) => ({
  color: (theme as Theme).colors.yellow[50],
}))

export const iconByTone: Record<
  NotificationTone,
  React.ComponentType<{}> | null
> = {
  BRAND: null,
  SUCCESS: Success,
  DANGER: Danger,
  WARNING: Warning,
  NEUTRAL: null,
}

type GetVariantStylesFn = (tone: NotificationTone) => ThemeCss

const variants: Record<NotificationVariant, GetVariantStylesFn> = {
  PRIMARY: tone => {
    return theme => [
      cardFrameCss(theme),
      {
        background: theme.colors.white,
        borderLeft: `10px solid ${theme.tones[tone].dark}`,
        padding: `${theme.space[5]} ${theme.space[7]} ${theme.space[5]} ${theme.space[5]}`,
        [theme.mediaQueries.desktop]: {
          padding: `${theme.space[5]} ${theme.space[7]} ${theme.space[5]} ${theme.space[5]}`,
        },
      },
    ]
  },
  SECONDARY: tone => {
    return theme => ({
      background: theme.tones[tone].superLight,
      padding: `${theme.space[5]} ${theme.space[7]}`,
      [theme.mediaQueries.desktop]: {
        padding: `${theme.space[7]} ${theme.space[9]}`,
      },
    })
  },
}

export function getNotificationVariantStyles(
  variant: NotificationVariant,
  tone: NotificationTone
) {
  return variants[variant](tone)
}
