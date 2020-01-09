import colors, { Colors } from "./colors"
import fonts, { Font } from "./fonts"
import fontWeights from "./fontWeights"
import fontSizes, { FontSize, FontSizes } from "./fontSizes"
import lineHeights, { LineHeightToken } from "./lineHeights"
import letterSpacings, { LetterSpacingToken } from "./letterSpacings"
import zIndices, { ZIndexToken, ZIndices } from "./zIndices"
import space, { SpaceToken, Space } from "./space"
import radii, { RadiusToken, Radii } from "./radii"
import shadows, { ShadowToken } from "./shadows"
import breakpoints, {
  BreakpointToken,
  Breakpoints,
  BreakpointsList,
  breakpointsList,
} from "./breakpoints"
import transitions, { Transitions } from "./transition"

/**
 * Colors
 */
type ColorScale = Colors

const themeColors: ColorScale = colors

/**
 * Font families
 */
export type ThemeFont = Font

type FontScale = Record<ThemeFont, string>

const themeFonts: FontScale = fonts

/**
 * Font weights
 */
export type ThemeFontWeight = "body" | "heading" | "bold"

type FontWeightScale = Record<ThemeFontWeight, number>

const themeFontWeights: FontWeightScale = {
  body: fontWeights[0],
  heading: fontWeights[1],
  bold: fontWeights[2],
}

/**
 * Font sizes
 */
export type ThemeFontSize = FontSize

type FontSizeScale = FontSizes

const themeFontSizes: FontSizes = fontSizes

/**
 * Line heights
 */
export type ThemeLineHeight = LineHeightToken

type LineHeightScale = Record<ThemeLineHeight, number>

const themeLineHeights: LineHeightScale = lineHeights

/**
 * Letter spacings
 */
export type ThemeLetterSpacing = LetterSpacingToken

type LetterSpacingScale = Record<ThemeLetterSpacing, string>

const themeLetterSpacings: LetterSpacingScale = letterSpacings

/**
 * Space
 */
export type ThemeSpace = SpaceToken

type SpaceScale = Space

const themeSpace: SpaceScale = space

/**
 * Radii
 */
export type ThemeRadius = RadiusToken

type RadiusScale = Radii

const themeRadii: RadiusScale = radii

/**
 * Shadows
 */
export type ThemeShadow = ShadowToken

type ShadowScale = Record<ThemeShadow, string>

const themeShadows: ShadowScale = shadows

/**
 * Z indices
 */
export type ThemeZIndex = ZIndexToken

type ZIndexScale = ZIndices

const themeZIndices: ZIndexScale = zIndices

/**
 * Breakpoints
 */
export type ThemeBreakpoint = BreakpointToken

type BreakpointScale = BreakpointsList

const themeBreakpoints: BreakpointScale = breakpointsList

/**
 * Media breakpoints
 */
export type ThemeMediaBreakpoint = BreakpointToken

type MediaBreakpointScale = Breakpoints

const themeMediaBreakpoints: MediaBreakpointScale = breakpoints

/**
 * Media queries
 */
export type ThemeMediaQuery = BreakpointToken

type MediaQueryScale = Record<ThemeMediaQuery, string>

const themeMediaQueries: MediaQueryScale = Object.entries(breakpoints).reduce(
  (memo, [breakpoint, widthInPx]) => {
    return {
      ...memo,
      [breakpoint]: `@media (min-width: ${widthInPx}px)`,
    }
  },
  {}
) as MediaQueryScale

/**
 * Transitions
 */
const themeTransitions = transitions

export type Theme = {
  colors: Readonly<ColorScale>;
  fonts: Readonly<FontScale>;
  fontWeights: Readonly<FontWeightScale>;
  fontSizes: Readonly<FontSizeScale>;
  lineHeights: Readonly<LineHeightScale>;
  letterSpacings: Readonly<LetterSpacingScale>;
  space: Readonly<SpaceScale>;
  radii: Readonly<RadiusScale>;
  shadows: Readonly<ShadowScale>;
  zIndices: Readonly<ZIndexScale>;
  breakpoints: Readonly<BreakpointScale>;
  mediaBreakpoints: Readonly<MediaBreakpointScale>;
  mediaQueries: Readonly<MediaQueryScale>;
  transitions: Readonly<Transitions>;
}

const defaultTheme: Theme = {
  colors: themeColors,
  fonts: themeFonts,
  fontWeights: themeFontWeights,
  fontSizes: themeFontSizes,
  lineHeights: themeLineHeights,
  letterSpacings: themeLetterSpacings,
  space: themeSpace,
  radii: themeRadii,
  shadows: themeShadows,
  zIndices: themeZIndices,
  breakpoints: themeBreakpoints,
  mediaBreakpoints: themeMediaBreakpoints,
  mediaQueries: themeMediaQueries,
  transitions: themeTransitions,
}

export function getTheme(): Theme {
  return defaultTheme
}
