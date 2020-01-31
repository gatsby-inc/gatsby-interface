/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Interpolation } from "@emotion/serialize"
import { Theme } from "../../../theme"

function getFormFieldLabelSizes(theme: Theme) {
  return {
    L: theme.fontSizes[2],
    M: theme.fontSizes[1],
    S: theme.fontSizes[0],
  }
}

export type FormFieldLabelSize = "L" | "M" | "S"

export const getLabelFontSize = (
  size: FormFieldLabelSize,
  t: Theme
): Interpolation => ({
  fontSize: getFormFieldLabelSizes(t)[size],
})

export const getLabelStyles = (theme: Theme): Interpolation => ({
  color: theme.colors.grey[90],
  lineHeight: 1.1,
})

export const RequiredFlag = () => (
  <span
    css={(theme: Theme) => ({
      color: theme.colors.grey[50],
      fontSize: theme.fontSizes[0],
      marginLeft: theme.space[1],
    })}
  >
    (required)
  </span>
)

export const getFocusStyles = (theme: Theme, hasError?: boolean) => ({
  boxShadow: `0 0 0 3px ${
    hasError ? theme.colors.red[10] : theme.colors.purple[20]
  }`,
  borderColor: hasError ? theme.colors.red[30] : theme.colors.purple[60],
})

export const getInputStyles = (
  theme: Theme,
  hasError?: boolean
): Interpolation => ({
  border: hasError
    ? `1px solid ${theme.colors.red[60]}`
    : `1px solid ${theme.colors.grey[30]}`,
  background: theme.colors.white,
  borderRadius: theme.radii[2],
  color: theme.colors.grey[90],
  fontFamily: theme.fonts.system,
  fontSize: theme.fontSizes[2],
  height: `2.25rem`,
  padding: `0 ${theme.space[3]}`,
  position: `relative`,
  width: `100%`,
  zIndex: 1,
  WebkitAppearance: `none`,

  ":focus": {
    outline: `0`,
    transition: `box-shadow 0.15s ease-in-out`,
    ...getFocusStyles(theme, hasError),
  },

  ":disabled": {
    background: theme.colors.grey[10],
    cursor: `not-allowed`,
  },

  "&:disabled::placeholder": {
    color: theme.colors.grey[40],
  },

  "&::placeholder": {
    color: theme.colors.grey[50],
  },
})

export const getDescriptionStyles = (theme: Theme): Interpolation => ({
  color: theme.colors.grey[50],
  fontSize: theme.fontSizes[0],
  lineHeight: 1.2,
  position: `relative`,
  zIndex: 0,
})
