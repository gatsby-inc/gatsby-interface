import { palette } from "./colors"
import { radius } from "./sizes"
import { fontSizes, fontFamilies } from "./typography"
import { spaces } from "./spaces"

// When we use theme-ui, we should use variants for some of these base styles

export const styles = {
  input: {
    border: `1px solid palette.grey[300]}`,
    borderRadius: radius.default,
    color: palette.grey[900],
    fontSize: fontSizes.s,
    height: `2.25rem`,
    padding: `0 ${spaces.s}`,
    width: `100%`,

    ":focus": {
      borderColor: palette.purple[400],
      boxShadow: `0 0 0 3px ${palette.purple[200]}`,
      outline: `0`,
      transition: `box-shadow 0.15s ease-in-out`,
    },
  },
  label: {
    color: palette.grey[700],
    fontSize: fontSizes[`2xs`],
    margin: `0 0 ${spaces.xs} ${spaces[`2xs`]}`,
  },
  link: {
    color: palette.purple[600],
  },
  heading: {
    color: palette.grey[900],
    fontFamily: fontFamilies.headerFontFamily,
    fontSize: fontSizes.xl,
    margin: `0`,
  },
  subheading: {
    color: palette.grey[900],
    fontFamily: fontFamilies.headerFontFamily,
    fontSize: fontSizes.m,
    margin: `1.5rem 0 0`,
  },
  lede: {
    color: palette.grey[700],
    fontFamily: fontFamilies.bodyFontFamily,
    fontSize: fontSizes.m,
    margin: `0.5rem 0 0`,
  },
  text: {
    color: palette.grey[700],
    fontFamily: fontFamilies.bodyFontFamily,
    fontSize: fontSizes.s,
    lineHeight: `1.5`,
    ":last-child": {
      margin: `0`,
    },
  },
}
