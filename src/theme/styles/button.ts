import { InterpolationWithTheme, keyframes } from "@emotion/core"
import { Theme, ThemeCss } from ".."

export type ButtonSize = "XL" | "L" | "M" | "S"
export type ButtonTone = "BRAND" | "SUCCESS" | "DANGER" | "NEUTRAL"
export type ButtonVariant = "PRIMARY" | "SECONDARY" | "GHOST"

export function getButtonCss({
  size = `L`,
  tone = `BRAND`,
  variant = `PRIMARY`,
  leftIcon,
  rightIcon,
  loading,
}: {
  size?: ButtonSize
  tone?: ButtonTone
  variant?: ButtonVariant
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
}): InterpolationWithTheme<Theme> {
  return (theme: Theme) => [
    getButtonBaseCss()(theme),
    getButtonIconsCss({
      hasLeftIcon: !!leftIcon,
      hasRightIcon: !!rightIcon || loading,
    })(theme),
    getButtonLoadingCss({ loading })(theme),
    getButtonVariantCss(variant, tone)(theme),
    getButtonSizeCss(size)(theme),
  ]
}

function getButtonBaseCss(): ThemeCss {
  return theme => ({
    alignItems: `center`,
    border: theme.colors.grey[60],
    borderRadius: theme.radii[2],
    boxSizing: `border-box`,
    cursor: `pointer`,
    display: `inline-flex`,
    fontFamily: theme.fonts.body,
    justifyContent: `center`,
    transition: `background 0.5s, border 0.5s, color 0.5s`,
    lineHeight: theme.lineHeights.solid,
    textDecoration: `none`,

    "&[disabled], &[disabled]:hover": {
      cursor: `not-allowed`,
      opacity: 0.5,
    },
  })
}

const animations = {
  iconLoadingAnim: keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`,
  iconHoverAnim: keyframes`
  33% {
    transform:  scale(1);
    }
  66% {
    transform: scale(0.8);
  }
`,
}

function getButtonIconsCss({
  hasLeftIcon,
  hasRightIcon,
}: {
  hasLeftIcon?: boolean
  hasRightIcon?: boolean
}): ThemeCss {
  return theme => ({
    svg: {
      flexShrink: 0,
      margin: `0 ${theme.space[2]}`,
      transform: `scale(1)`,
      marginRight: hasRightIcon ? `-${theme.space[2]}` : undefined,
      marginLeft: hasLeftIcon ? `-0.30em` : undefined,
    },
    "&:hover:not([disabled]), &:focus:not([disabled])": {
      svg: {
        animation: `${animations.iconHoverAnim} 1s linear infinite`,
      },
    },
  })
}

function getButtonLoadingCss({ loading }: { loading?: boolean }): ThemeCss {
  return _theme =>
    loading
      ? {
          "&[disabled], &[disabled]:hover": {
            opacity: 0.9,
          },
          svg: {
            animation: `${animations.iconLoadingAnim} 1s linear infinite`,
          },
          "&:hover:not([disabled]), &:focus:not([disabled])": {
            svg: {
              animation: `none`,
            },
          },
        }
      : {}
}

function getButtonSizeCss(size: ButtonSize): ThemeCss {
  return theme => {
    if (size === `S`) {
      return {
        fontSize: theme.fontSizes[0],
        minHeight: theme.space[7],
        padding: `${theme.space[2]} ${theme.space[3]}`,
      }
    }
    if (size === `M`) {
      return {
        fontSize: theme.fontSizes[1],
        minHeight: theme.space[8],
        padding: `${theme.space[2]} ${theme.space[4]}`,
      }
    }
    if (size === `L`) {
      return {
        fontSize: theme.fontSizes[2],
        minHeight: `calc(${theme.space[2]} * 9)`,
        padding: `${theme.space[2]} ${theme.space[5]}`,
      }
    }
    if (size === `XL`) {
      return {
        fontSize: theme.fontSizes[4],
        minHeight: theme.space[10],
        padding: `${theme.space[4]} ${theme.space[6]}`,
      }
    }
  }
}

function getButtonVariantCss(
  variant: ButtonVariant,
  tone: ButtonTone
): ThemeCss {
  return theme => {
    if (variant === `PRIMARY`) {
      return {
        background: theme.tones[tone].dark,
        border: `1px solid ${theme.tones[tone].dark}`,
        color: theme.colors.white,
        fontWeight: theme.fontWeights.semiBold,
        ":hover": {
          background: theme.tones[tone].darker,
          border: `1px solid ${theme.tones[tone].darker}`,
        },
      }
    }
    if (variant === `SECONDARY`) {
      return {
        background: `transparent`,
        border: `1px solid ${theme.tones[tone].light}`,
        color: theme.tones[tone].dark,
        ":hover": {
          borderColor: theme.tones[tone].dark,
          color: theme.tones[tone].dark,
        },
      }
    }
    if (variant === `GHOST`) {
      return {
        background: `transparent`,
        border: `1px solid transparent`,
        color: theme.tones[tone].dark,
        ":hover": {
          background: theme.tones[tone].superLight,
          color: theme.tones[tone].dark,
        },
      }
    }
    return {}
  }
}
