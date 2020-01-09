import { fonts as rawFonts, FontToken } from "gatsby-design-tokens"

export type Font = FontToken

/**
 * Font families are represented as an array of strings in 'gatsby-design-tokens'
 * In order to make them more easy to use we're going to compose a string out of them
 * that can be passed to "fontFamily" style
 */
const fonts: Partial<Record<Font, string>> = {} // Object.keys(baseFonts).map(key => baseFonts[key].join())

for (const prop in rawFonts) {
  const font = prop as Font
  fonts[font] = rawFonts[font].join()
}

export default fonts as Record<Font, string>

/*

  fonts = {
    header: "Futura PT,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    monospace: "SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    serif: "Georgia,Times New Roman,Times,serif",
    system: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  }

*/
