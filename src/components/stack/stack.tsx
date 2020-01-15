import { Interpolation } from "@emotion/serialize"
import { Theme, ThemeSpace, ThemeMediaBreakpoint } from "../../theme"

export type StackGap = ThemeSpace | string
export type ResponsiveStackGap = Partial<Record<ThemeMediaBreakpoint, StackGap>>

export type StackAlign = `justify` | `center` | `left` | `right`
export type StackAlignCSS = `justify` | `center` | `flex-start` | `flex-end`
const ALIGN_TO_CSS_ALIGN: Record<StackAlign, StackAlignCSS> = {
  justify: `justify`,
  center: `center`,
  right: `flex-end`,
  left: `flex-start`,
}

export type GetStackStylesParams = {
  gap?: StackGap
  responsiveGap?: ResponsiveStackGap
  align?: StackAlign
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
  const { gap = 0, responsiveGap = {}, align = `justify`, theme: t } =
    params || {}

  let responsiveGapCss = {}

  if (t && t.mediaQueries) {
    responsiveGapCss = Object.entries(responsiveGap).reduce<
      Record<string, Interpolation>
    >((acc, [breakpoint, gap]) => {
      const mediaQuery = t.mediaQueries[breakpoint as ThemeMediaBreakpoint]

      if (mediaQuery && gap !== undefined && gap !== null) {
        acc[mediaQuery] = {
          marginTop: getGapVal(gap as StackGap, t),
        }
      }

      return acc
    }, {})
  }

  const stackCss: Interpolation = {
    display: `flex`,
    flexDirection: `column`,
    alignItems: ALIGN_TO_CSS_ALIGN[align || `justify`],
  }

  const stackItemCss: Interpolation = {
    marginTop: getGapVal(gap, t),

    "&:first-child": {
      marginTop: 0,
    },

    ...responsiveGapCss,
  }

  return {
    stackCss,
    stackItemCss,
  }
}
