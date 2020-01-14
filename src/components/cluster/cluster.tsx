import { Interpolation } from "@emotion/serialize"
import { Theme, ThemeSpace } from "../../theme"

export type ClusterGap = ThemeSpace | string
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
  align?: ClusterAlign
  theme?: Theme
}

export type GetClusterStylesReturn = {
  clusterCss: Interpolation
  clusterItemCss: Interpolation
}

function getGapVal(gap: ClusterGap, t?: Theme): string {
  if (t && t.space[gap as ThemeSpace]) {
    return t.space[gap as ThemeSpace]
  }

  return gap as string
}

export function getClusterStyles(
  params?: GetClusterStylesParams
): GetClusterStylesReturn {
  const { gap = 0, verticalGap = 0, align = `left`, theme: t } = params || {}

  const clusterCss: Interpolation = {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: align ? ALIGN_TO_CSS_ALIGN[align] : `center`,
    margin: `calc(${getGapVal(gap, t)} / 2 * -1)`,
    marginTop: `calc(${
      verticalGap ? getGapVal(verticalGap, t) : getGapVal(gap, t)
    } / 2 * -1)`,
    marginBottom: `calc(${
      verticalGap ? getGapVal(verticalGap, t) : getGapVal(gap, t)
    } / 2 * -1)`,

    alignItems: ALIGN_TO_CSS_ALIGN[align || `justify`],
  }

  const clusterItemCss: Interpolation = {
    margin: `calc(${getGapVal(gap, t)} / 2)`,
    marginTop: `calc(${
      verticalGap ? getGapVal(verticalGap, t) : getGapVal(gap, t)
    } / 2)`,
    marginBottom: `calc(${
      verticalGap ? getGapVal(verticalGap, t) : getGapVal(gap, t)
    } / 2)`,
  }

  return {
    clusterCss,
    clusterItemCss,
  }
}
