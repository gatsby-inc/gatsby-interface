import { FontToken } from "gatsby-design-tokens"
import { fonts as baseFonts } from "gatsby-design-tokens"

export type Font = FontToken

const fonts: Record<Font, string> = {
  body: `Inter,${baseFonts.body}`,
  brand: baseFonts.brand,
  heading: `Inter,${baseFonts.body}`,
  monospace: baseFonts.monospace,
}

export default fonts

/*

  fonts = {
    body: "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    brand: "Futura PT,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    heading: "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    monospace: "SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
  }

*/
