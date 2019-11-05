import styled from "@emotion/styled"
import Success from "../../assets/status/Success"
import Danger from "../../assets/status/Danger"
import { MdWarning } from "react-icons/md"

import { palette } from "../../theme"

const Warning = styled(MdWarning)`
  fill: ${palette.yellow[`500`]};
`

export const VARIANTS = [`PRIMARY`, `SECONDARY`]
export const TONES = [`BRAND`, `SUCCESS`, `DANGER`, `WARNING`, `NEUTRAL`]
export const ICONS = {
  BRAND: null,
  SUCCESS: Success,
  DANGER: Danger,
  WARNING: Warning,
  NEUTRAL: null,
}
