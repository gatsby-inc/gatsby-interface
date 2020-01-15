import { Interpolation } from "@emotion/serialize"
import { Theme, ThemeSpace, ThemeMediaBreakpoint } from "../../theme"

export type ClusterGap = ThemeSpace | string
type ResponsiveClusterGap = {
  gap: ClusterGap
  verticalGap?: ClusterGap
}
export type ResponsiveClusterGaps = Partial<
  Record<ThemeMediaBreakpoint, ResponsiveClusterGap>
>
export type ClusterAlign = `center` | `left` | `right`
export type ClusterAlignCss = `center` | `flex-start` | `flex-end`
const ALIGN_TO_CSS_ALIGN: Record<ClusterAlign, ClusterAlignCss> = {
  center: `center`,
  right: `flex-end`,
  left: `flex-start`,
}

export type GetClusterStylesParams = {
  gap?: ClusterGap
  verticalGap?: ClusterGap
  responsiveGaps?: ResponsiveClusterGaps
  align?: ClusterAlign
  theme?: Theme
}

export type GetClusterStylesReturn = {
  clusterCss: Interpolation
  clusterItemCss: Interpolation
}

function pickProperGap(gap: ClusterGap, verticalGap?: ClusterGap) {
  return verticalGap ? verticalGap : gap
}

function getGapVal(gap: ClusterGap, t?: Theme): string {
  if (t && t.space[gap as ThemeSpace]) {
    return t.space[gap as ThemeSpace]
  }

  return gap as string
}

function getClusterGapCalc(gap: string) {
  return `calc(${gap} / 2 * -1)`
}

function getClusterItemGapCalc(gap: string) {
  return `calc(${gap} / 2)`
}

type GetMarginCssTarget = `cluster` | `clusterItem`
type GetMarginsCssValuesParams = {
  gap: ClusterGap
  verticalGap?: ClusterGap
  target?: GetMarginCssTarget
  theme?: Theme
}

function getMarginsCssValues(params: GetMarginsCssValuesParams) {
  const { gap, verticalGap, target = `cluster`, theme: t } = params
  const calcGetter =
    target === `clusterItem` ? getClusterItemGapCalc : getClusterGapCalc

  return {
    margin: calcGetter(getGapVal(gap, t)),
    marginBottom: calcGetter(getGapVal(pickProperGap(gap, verticalGap), t)),
    marginTop: calcGetter(getGapVal(pickProperGap(gap, verticalGap), t)),
  }
}

export function getClusterStyles(
  params?: GetClusterStylesParams
): GetClusterStylesReturn {
  const {
    gap = 0,
    verticalGap = 0,
    responsiveGaps = {},
    align = `left`,
    theme: t,
  } = params || {}

  const clusterResponsiveGapsCss: Record<string, Interpolation> = {}
  const clusterItemResponsiveGapsCss: Record<string, Interpolation> = {}

  if (t && t.mediaQueries) {
    Object.entries(responsiveGaps).forEach(([breakpoint, gaps]) => {
      const mediaQuery = t.mediaQueries[breakpoint as ThemeMediaBreakpoint]
      const { gap, verticalGap } = gaps || {}

      if (mediaQuery && gap !== undefined && gap !== null) {
        clusterResponsiveGapsCss[mediaQuery] = getMarginsCssValues({
          gap,
          verticalGap,
          target: `cluster`,
          theme: t,
        })

        clusterItemResponsiveGapsCss[mediaQuery] = getMarginsCssValues({
          gap,
          verticalGap,
          target: `clusterItem`,
          theme: t,
        })
      }
    })
  }

  const clusterCss: Interpolation = {
    alignItems: ALIGN_TO_CSS_ALIGN[align || `justify`],
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: align ? ALIGN_TO_CSS_ALIGN[align] : `center`,
    ...getMarginsCssValues({
      gap,
      verticalGap,
      target: `cluster`,
      theme: t,
    }),
    ...clusterResponsiveGapsCss,
  }

  const clusterItemCss: Interpolation = {
    ...getMarginsCssValues({
      gap,
      verticalGap,
      target: `clusterItem`,
      theme: t,
    }),
    ...clusterItemResponsiveGapsCss,
  }

  return {
    clusterCss,
    clusterItemCss,
  }
}
