import { fonts as baseFonts } from "gatsby-design-tokens"

const fonts = Object.keys(baseFonts).map(key => baseFonts[key].join())

export default fonts

/*


  fonts = [
    header: (13) ["Futura PT", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    monospace: (7) ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    serif: (4) ["Georgia", "Times New Roman", "Times", "serif"]
    system: (12) ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
  ]

  */
