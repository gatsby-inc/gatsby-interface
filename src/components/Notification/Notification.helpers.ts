import styled from "@emotion/styled"
import { Success, Danger } from "../../assets"
import { MdWarning } from "react-icons/md"
import { NotificationTone, NotificationVariant } from "./types"
import { Theme, ThemeCss } from "../../theme"

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
      {
        background: theme.colors.white,
        borderLeft: `${theme.space[2]} solid ${theme.tones[tone].dark}`,
        paddingTop: theme.space[5],
        paddingLeft: theme.space[6],
        paddingRight: theme.space[7],
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
