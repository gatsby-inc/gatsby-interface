import { Interpolation } from "@emotion/serialize"
import { Theme, ThemeSpace, ThemeMediaBreakpoint } from "../../theme"

export type StackGap = ThemeSpace | string
export type ResponsiveStackGap = Partial<Record<ThemeMediaBreakpoint, StackGap>>

export type StackAlign = `stretch` | `center` | `left` | `right`
export type StackAlignCSS = `stretch` | `center` | `flex-start` | `flex-end`
export type StackDirection = `column` | `row`
const ALIGN_TO_CSS_ALIGN: Record<StackAlign, StackAlignCSS> = {
  stretch: `stretch`,
  center: `center`,
  right: `flex-end`,
  left: `flex-start`,
}

export type GetStackStylesParams = {
  gap?: StackGap
  responsiveGap?: ResponsiveStackGap
  align?: StackAlign
  direction?: StackDirection
  theme?: Theme
}

export type GetStackStylesReturn = {
  stackCss: Interpolation
  stackItemCss: Interpolation
}

function getGapVal(gap: StackGap, t?: Theme): string {
  if (t && t.space[gap as ThemeSpace]) {
    return t.space[gap as ThemeSpace]
  }

  return gap as string
}

export function getStackStyles(
  params?: GetStackStylesParams
): GetStackStylesReturn {
  const {
    gap = 0,
    responsiveGap = {},
    align = `stretch`,
    direction = `column`,
    theme: t,
  } = params || {}

  const isHorizontal = direction === `row`

  let responsiveGapCss = {}

  if (t && t.mediaQueries) {
    responsiveGapCss = Object.entries(responsiveGap).reduce<
      Record<string, Interpolation>
    >((acc, [breakpoint, gap]) => {
      const mediaQuery = t.mediaQueries[breakpoint as ThemeMediaBreakpoint]

      if (mediaQuery && gap !== undefined && gap !== null) {
        acc[mediaQuery] = {
          marginTop: !isHorizontal ? getGapVal(gap, t) : undefined,
          marginLeft: isHorizontal ? getGapVal(gap, t) : undefined,
        }
      }

      return acc
    }, {})
  }

  const stackCss: Interpolation = {
    display: `flex`,
    flexDirection: isHorizontal ? `row` : `column`,
    alignItems: !isHorizontal
      ? ALIGN_TO_CSS_ALIGN[align || `stretch`]
      : undefined,
    justifyContent: isHorizontal
      ? ALIGN_TO_CSS_ALIGN[align || `left`]
      : undefined,
    overflow: isHorizontal ? `auto` : undefined,
  }

  const stackItemCss: Interpolation = {
    marginTop: !isHorizontal ? getGapVal(gap, t) : undefined,
    marginLeft: isHorizontal ? getGapVal(gap, t) : undefined,
    flexShrink: isHorizontal ? 0 : undefined,

    "&:first-child": {
      marginTop: !isHorizontal ? 0 : undefined,
      marginLeft: isHorizontal ? 0 : undefined,
    },

    ...responsiveGapCss,
  }

  return {
    stackCss,
    stackItemCss,
  }
}
