import colors from "./colors"
import { AtomTone } from "./types"

export type ToneColors = {
  superLight: string
  light: string
  medium: string
  dark: string
  darker: string
  superDark: string
}

const tones: Record<AtomTone, ToneColors> = {
  BRAND: {
    superLight: colors.purple[5],
    light: colors.purple[20],
    medium: colors.purple[40],
    dark: colors.purple[60],
    darker: colors.purple[70],
    superDark: colors.purple[90],
  },
  SUCCESS: {
    superLight: colors.green[5],
    light: colors.green[20],
    medium: colors.green[50],
    dark: colors.green[60],
    darker: colors.green[70],
    superDark: colors.green[80],
  },
  DANGER: {
    superLight: colors.red[5],
    light: colors.red[20],
    medium: colors.red[50],
    dark: colors.red[70],
    darker: colors.red[80],
    superDark: colors.red[90],
  },
  NEUTRAL: {
    superLight: colors.grey[5],
    light: colors.grey[20],
    medium: colors.grey[40],
    dark: colors.grey[50],
    darker: colors.grey[60],
    superDark: colors.grey[90],
  },
  WARNING: {
    superLight: colors.orange[5],
    light: colors.orange[30],
    medium: colors.orange[50],
    dark: colors.orange[60],
    darker: colors.orange[70],
    superDark: colors.yellow[90],
  },
}

export default tones
