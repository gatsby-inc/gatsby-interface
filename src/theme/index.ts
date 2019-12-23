import colors, { Colors } from "./colors"
import fonts, { Font } from "./fonts"
import fontWeights from "./fontWeights"
import fontSizes, { FontSize, FontSizes } from "./fontSizes"
import lineHeights, { LineHeightToken } from "./lineHeights"
import letterSpacings, { LetterSpacingToken } from "./letterSpacings"
import zIndices, { ZIndexToken, ZIndices } from "./zIndices"
import space, { SpaceToken, Space } from "./space"

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
export type ThemeLineHeight = LineHeightToken | "body" | "heading"

type LineHeightScale = Record<ThemeLineHeight, number>

const themeLineHeights: LineHeightScale = {
  ...lineHeights,
  body: lineHeights.default,
  heading: lineHeights.dense,
}

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
 * Z indices
 */
export type ThemeZIndex = ZIndexToken

type ZIndexScale = ZIndices

const themeZIndices: ZIndexScale = zIndices

export type Theme = {
  colors: ColorScale;
  fonts: FontScale;
  fontWeights: FontWeightScale;
  fontSizes: FontSizeScale;
  lineHeights: LineHeightScale;
  letterSpacings: LetterSpacingScale;
  space: SpaceScale;
  zIndices: ZIndexScale;
}

const defaultTheme: Theme = {
  colors: themeColors,
  fonts: themeFonts,
  fontWeights: themeFontWeights,
  fontSizes: themeFontSizes,
  lineHeights: themeLineHeights,
  letterSpacings: themeLetterSpacings,
  space: themeSpace,
  zIndices: themeZIndices,
}

export function getTheme(): Theme {
  return defaultTheme
}
