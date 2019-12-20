import { Interpolation } from "@emotion/core"
import styled from "@emotion/styled"
import { Success, Danger } from "../../assets"
import { MdWarning } from "react-icons/md"

import colors from "../../theme/colors"
import card from "../../theme/styles/card"
import tones from "../../theme/tones"
import space from "../../theme/space"
import breakpoints from "../../theme/breakpoints"
import { NotificationTone, NotificationVariant } from "./types"
import { ToneColors } from "../../theme/tones"

const Warning = styled(MdWarning)`
  fill: ${colors.yellow[50]};
`

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

type GetVariantStylesFn = (toneColors: ToneColors) => Interpolation

const variants: Record<NotificationVariant, GetVariantStylesFn> = {
  PRIMARY: toneColors => {
    return {
      ...card.frame,
      alignItems: `center`,
      background: colors.white,
      borderLeft: `10px solid ${toneColors.dark}`,
      padding: `${space[5]} ${space[7]} ${space[5]} ${space[5]}`,
      [`@media (min-width: ${breakpoints.desktop}px)`]: {
        padding: `${space[5]} ${space[7]} ${space[5]} ${space[5]}`,
      },
    }
  },
  SECONDARY: toneColors => {
    return {
      background: toneColors.superLight,
      padding: `${space[5]} ${space[7]}`,
      [`@media (min-width: ${breakpoints.desktop}px)`]: {
        padding: `${space[7]} ${space[9]}`,
      },
    }
  },
}

export function getNotificationVariantStyles(
  variant: NotificationVariant,
  tone: NotificationTone
) {
  return variants[variant](tones[tone])
}
