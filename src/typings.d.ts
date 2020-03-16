declare module "*.md" {
  const value: string
  export default value
}

declare module "*.svg" {
  const value: string
  export default value
}

declare module "gatsby-design-tokens" {
  type MapToString<T> = { [K in keyof T]: string }

  type Shade = 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 5

  export type Colors = {
    purple: Record<Shade, string>
    orange: Record<Shade, string>
    yellow: Record<Shade, string>
    red: Record<Shade, string>
    magenta: Record<Shade, string>
    blue: Record<Shade, string>
    teal: Record<Shade, string>
    green: Record<Shade, string>
    grey: Record<Shade, string>
    white: string
    black: string
    gatsby: string
    // legacy shortcuts
    // most of these should be refactored to role-based tokens as we flesh those out
    lilac: string
    lavender: string
    accent: string
    warning: string
    // semi-transparent colors
    blackFade: Record<Shade, string>
    whiteFade: Record<Shade, string>
    // role-based tokens
    ui: {
      background: string
      hover: string
      border: {
        subtle: string
      }
    }
    link: {
      color: string
      border: string
      hoverBorder: string
    }
    text: {
      header: string
      primary: string
      secondary: string
      placeholder: string
    }
    input: {
      border: string
      focusBorder: string
      focusBoxShadow: string
    }
    code: {
      bgInline: string
      bg: string
      border: string
      text: string
      remove: string
      add: string
      selector: string
      tag: string
      keyword: string
      comment: string
      punctuation: string
      regex: string
      cssString: string
      invisibles: string
      scrollbarThumb: string
      lineHighlightBorder: string
      copyButton: string
      lineHighlightBackground: string
      scrollbarTrack: string
    }
  }

  /**
   * Using TypeScript tuple to ensure that our "fontSizes", "borders" etc are of fixed length
   * This should allow TS to detect when we're trying to access a non-existing size, e.g. fontSize[18]
   */

  type FontSizesRaw = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ]

  type FontSizes = MapToString<FontSizesRaw>
  type FontSizesPx = MapToString<FontSizes>

  type SpaceRaw = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ]
  type Space = MapToString<SpaceRaw>
  type SpacePx = MapToString<SpaceRaw>

  /**
   * Token types
   */
  export type BreakpointToken = "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  export type FontToken = "body" | "system" | "heading" | "monospace" | "serif"
  export type FontWeightToken =
    | "body"
    | "semiBold"
    | "bold"
    | "extraBold"
    | "heading"
  export type LineHeightToken =
    | "solid"
    | "dense"
    | "default"
    | "loose"
    | "heading"
    | "body"
  export type LetterSpacingToken = "normal" | "tracked" | "tight"
  export type ShadowToken = "raised" | "floating" | "overlay" | "dialog"
  export type SpaceToken = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  export type TransitionCurve = `default` | `fastOutLinearIn`
  export type TransitionSpeed =
    | `faster`
    | `fast`
    | `default`
    | `slow`
    | `slower`
  export type Transitions = {
    default: string
    curve: Record<TransitionCurve, string>
    speed: Record<TransitionSpeed, string>
  }

  export const borders: [0, string, string]
  export const breakpoints: Record<BreakpointToken, string | number>
  export const breakpointsArray: [
    string,
    string,
    string,
    string,
    string,
    string
  ]
  export const colors: Colors
  export const fonts: Record<FontToken, string>
  export const fontsLists: Record<FontToken, string[]>
  export const fontSizes: FontSizes
  export const fontSizesPx: FontSizesPx
  export const fontSizesRaw: FontSizesRaw
  export const fontWeights: Record<FontWeightToken, number>
  export const letterSpacings: Record<LetterSpacingToken, string>
  export const lineHeights: Record<LineHeightToken, number>
  export const mediaQueries: Record<BreakpointToken, string>
  export const radii: [number, string, string, string, string, string, string]
  export const shadows: Record<ShadowToken, string>
  export const space: Space
  export const spacePx: SpacePx
  export const spaceRaw: SpaceRaw
  export const transition: Transitions
}

declare module "storybook-chromatic/isChromatic" {
  function isChromatic(): boolean
  export default isChromatic
}
