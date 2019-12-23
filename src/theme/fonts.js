import { fonts as rawFonts } from "gatsby-design-tokens"

const fonts = {} // Object.keys(baseFonts).map(key => baseFonts[key].join())

for (const prop in rawFonts) {
  fonts[prop] = rawFonts[prop].join()
}

export default fonts

/*

  fonts = {
    header: "Futura PT,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    monospace: "SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    serif: "Georgia,Times New Roman,Times,serif",
    system: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  }

*/
