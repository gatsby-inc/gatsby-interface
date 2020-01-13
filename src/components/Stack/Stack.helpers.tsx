import { Interpolation } from "@emotion/serialize"
import space, { SpaceToken } from "../../theme/space"

export type StackGap = SpaceToken | string
export type StackAlign = `justify` | `center` | `left` | `right`
export type StackAlignCSS = `justify` | `center` | `flex-start` | `flex-end`

export type GetStackStyleProps = {
  gap?: StackGap
  align?: StackAlign
}

export function getStackStyle(props?: GetStackStyleProps): Interpolation {
  const { gap = 0 } = props || {}

  const gapVal: string = typeof gap === `string` ? gap : space[gap]

  return {
    display: `flex`,
    flexDirection: `column`,
    alignItems:
      props && props.align ? translateAlignToCss(props.align) : `justify`,

    "& > * + *": {
      marginTop: gapVal,
    },
  }
}

function translateAlignToCss(val: StackAlign): StackAlignCSS {
  const VAL_TO_CSSVAL: {
    [key: string]: StackAlignCSS
  } = {
    justify: `justify`,
    center: `center`,
    right: `flex-end`,
    left: `flex-start`,
  }
  return VAL_TO_CSSVAL[val]
}
