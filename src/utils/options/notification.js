import Success from "../../assets/status/Success"
import { MdWarning, MdError } from "react-icons/md"

export const VARIANTS = [`PRIMARY`, `SECONDARY`]
export const TONES = [`BRAND`, `SUCCESS`, `DANGER`, `WARNING`, `NEUTRAL`]
export const ICONS = {
  BRAND: null,
  SUCCESS: Success,
  DANGER: MdError,
  WARNING: MdWarning,
  NEUTRAL: null,
}
