import { CSSObject } from "@emotion/core"
import { ThemeCss, Theme } from "../../../theme"
import { FormGroupOptionsDirection } from "../components/FormGroupField"
import { FormFieldBlockLayout } from "../components/FormField"

/**
 * Base styles
 */

const disabledStyles = (theme: Theme): CSSObject => ({
  background: theme.colors.grey[10],
  cursor: `not-allowed`,
})

const placeholderStyles = (theme: Theme): CSSObject => ({
  color: theme.colors.grey[50],
})

const disabledPlaceholderStyles = (theme: Theme): CSSObject => ({
  color: theme.colors.grey[40],
})

const focusedStyles = (theme: Theme): CSSObject => ({
  outline: `0`,
  transition: `box-shadow 0.15s ease-in-out`,
  boxShadow: `0 0 0 3px ${theme.colors.purple[20]}`,
  borderColor: theme.colors.purple[60],
})

const focusedErrorStyles = (theme: Theme): CSSObject => ({
  outline: `0`,
  transition: `box-shadow 0.15s ease-in-out`,
  boxShadow: `0 0 0 3px ${theme.colors.red[10]}`,
  borderColor: theme.colors.red[30],
})

const errorStyles = (theme: Theme): CSSObject => ({
  borderColor: theme.colors.red[60],
})

export const baseFormControlStyles = {
  disabledStyles,
  disabledPlaceholderStyles,
  focusedStyles,
  focusedErrorStyles,
  errorStyles,
  placeholderStyles,
}

export const baseInputCss: ThemeCss = theme => [
  {
    borderWidth: 1,
    borderStyle: `solid`,
    borderColor: theme.colors.grey[30],
    borderRadius: theme.radii[2],
    background: theme.colors.white,
    color: theme.colors.grey[90],
    fontFamily: theme.fonts.system,
    fontSize: theme.fontSizes[2],
    height: `2.25rem`,
    padding: `0 ${theme.space[3]}`,
    position: `relative`,
    width: `100%`,
    zIndex: 1,
    WebkitAppearance: `none`,

    ":focus": baseFormControlStyles.focusedStyles(theme),

    ":disabled": baseFormControlStyles.disabledStyles(theme),

    "&:disabled::placeholder": baseFormControlStyles.disabledPlaceholderStyles(
      theme
    ),

    "&::placeholder": baseFormControlStyles.placeholderStyles(theme),

    "&[aria-invalid='true']": baseFormControlStyles.errorStyles(theme),
    "&[aria-invalid='true']:focus": baseFormControlStyles.focusedErrorStyles(
      theme
    ),
  },
]

export function getOptionLabelCss(
  optionControlSize = "0px",
  optionsDirection: FormGroupOptionsDirection = `column`
): ThemeCss {
  return theme => ({
    color: theme.colors.grey[90],
    cursor: `pointer`,
    lineHeight: theme.lineHeights.dense,
    fontSize: theme.fontSizes[2],
    paddingLeft: `calc(${optionControlSize} + ${
      optionsDirection === `row` ? theme.space[2] : theme.space[4]
    })`,
  })
}

export function getOptionLabelOffsetStyles(
  optionsDirection: FormGroupOptionsDirection = `column`
) {
  return (theme: Theme): CSSObject => ({
    paddingLeft: optionsDirection === `row` ? theme.space[2] : theme.space[4],
  })
}

export function getFieldLayoutStyles(
  layout: FormFieldBlockLayout = `vertical`,
  isGroupField = false
) {
  const isHorizontal = layout === `horizontal`

  const labelCss: ThemeCss = theme => [
    isHorizontal && {
      [theme.mediaQueries.desktop]: [
        {
          display: `table-cell`,
          minWidth: `20ch`,
          maxWidth: `20ch`,
          // Use box-sizing in combination with width and padding-right
          // to ensure that the label text itself takes no more than 20 chars in width
          boxSizing: `content-box`,
          width: `20ch`,
          paddingRight: theme.space[7],
          paddingTop: theme.space[3],
          verticalAlign: `top`,
        },
        isGroupField && {
          // Unfortunately, setting "display" to <legend> does not seem to work in Chrome,
          // So instead we are going to rely on "float" for group form fields
          float: `left`,
        },
      ],
    },
  ]

  const fieldBodyCss: ThemeCss = theme => [
    isHorizontal && {
      [theme.mediaQueries.desktop]: {
        display: `table-cell`,
        width: `100%`,
        verticalAlign: `top`,
      },
    },
  ]

  return {
    labelCss: labelCss,
    fieldBodyCss: fieldBodyCss,
  }
}
