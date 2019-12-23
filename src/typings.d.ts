declare module "*.md" {
  const value: string
  export default value
}

declare module "gatsby-design-tokens" {
  type Shade = 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 5

  type FadeShade = 80 | 70 | 60 | 50 | 30 | 10

  export type Colors = {
    purple: Record<Shade, string>;
    orange: Record<Shade, string>;
    yellow: Record<Shade, string>;
    red: Record<Shade, string>;
    magenta: Record<Shade, string>;
    blue: Record<Shade, string>;
    teal: Record<Shade, string>;
    green: Record<Shade, string>;
    grey: Record<Shade, string>;
    white: string;
    black: string;
    gatsby: string;
    // legacy shortcuts
    // most of these should be refactored to role-based tokens as we flesh those out
    lilac: string;
    lavender: string;
    accent: string;
    warning: string;
    // semi-transparent colors
    blackFade: Record<FadeShade, string>;
    whiteFade: Record<FadeShade, string>;
    // role-based tokens
    ui: {
      background: string;
      hover: string;
      border: {
        subtle: string;
      };
    };
    link: {
      color: string;
      border: string;
      hoverBorder: string;
    };
    text: {
      header: string;
      primary: string;
      secondary: string;
      placeholder: string;
    };
    input: {
      border: string;
      focusBorder: string;
      focusBoxShadow: string;
    };
    code: {
      bgInline: string;
      bg: string;
      border: string;
      text: string;
      remove: string;
      add: string;
      selector: string;
      tag: string;
      keyword: string;
      comment: string;
      punctuation: string;
      regex: string;
      cssString: string;
      invisibles: string;
      scrollbarThumb: string;
      lineHighlightBorder: string;
    };
  }

  /**
   * Using TypeScript tuple to ensure that our "fontSizes", "borders" etc are of fixed length
   * This should allow TS to detect when we're trying to access a non-existing size, e.g. fontSize[18]
   */

  type FontSizes = [
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

  type Space = [
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

  type Breakpoint = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"

  export const borders: [0, string, string]
  export const breakpoints: Record<Breakpoint, string | number>
  export const colors: Colors
  export const fonts: Record<
    "system" | "header" | "monospace" | "serif",
    string[]
  >
  export const fontSizes: FontSizes
  export const fontWeights: [number, number, number]
  export const letterSpacings: Record<"normal" | "tracked" | "tight", string>
  export const lineHeights: Record<
    "solid" | "dense" | "default" | "loose",
    number
  >
  export const mediaQueries: Record<Breakpoint, string>
  export const radii: [number, number, number, number, number, number, string]
  export const shadows: Record<
    "raised" | "floating" | "overlay" | "dialog",
    string
  >
  export const sizes: {
    headerHeight: string
    bannerHeight: string
    sidebarUtilityHeight: string
    pageHeadingDesktopWidth: string
    sidebarWidth: {
      default: number
      large: number
    }
    avatar: string
  }
  export const space: Space
  export const transition: {
    curve: {
      default: string
    }
    speed: {
      default: string
      fast: string
      slow: string
    }
  }
  export const zIndices: Record<
    | "widget"
    | "navigation"
    | "banner"
    | "modal"
    | "sidebar"
    | "floatingActionButton"
    | "skipLink",
    number
  >
}
