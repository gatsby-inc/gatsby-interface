import { Interpolation } from "@emotion/serialize"
import space, { SpaceToken } from "../../theme/space"

export type ClusterGap = SpaceToken | string
export type ClusterAlign = `center` | `left` | `right`
export type StackAlignCSS = `center` | `flex-start` | `flex-end`

export type GetClusterStyleProps = {
  gap?: ClusterGap
  verticalGap?: ClusterGap
  align?: ClusterAlign
}

export function getClusterStyle(props?: GetClusterStyleProps): Interpolation {
  const { gap = 0, verticalGap = 0 } = props || {}

  const gapVal: string = typeof gap === `string` ? gap : space[gap]
  const verticalGapVal: string =
    typeof verticalGap === `string` ? verticalGap : space[verticalGap]

  return {
    "& > *": {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent:
        props && props.align ? translateAlignToCss(props.align) : `center`,
      margin: `calc(${gapVal} / 2 * -1)`,
      marginTop: `calc(${verticalGapVal ? verticalGapVal : gapVal} / 2 * -1)`,
      marginBottom: `calc(${
        verticalGapVal ? verticalGapVal : gapVal
      } / 2 * -1)`,
    },

    "& > * > *": {
      margin: `calc(${gapVal} / 2)`,
      marginTop: `calc(${verticalGapVal ? verticalGapVal : gapVal} / 2)`,
      marginBottom: `calc(${verticalGapVal ? verticalGapVal : gapVal} / 2)`,
    },
  }
}

function translateAlignToCss(val: ClusterAlign): StackAlignCSS {
  const VAL_TO_CSSVAL: {
    [key: string]: StackAlignCSS
  } = {
    center: `center`,
    right: `flex-end`,
    left: `flex-start`,
  }
  return VAL_TO_CSSVAL[val]
}
