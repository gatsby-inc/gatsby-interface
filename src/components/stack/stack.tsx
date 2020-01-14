import { Interpolation } from "@emotion/serialize"
import space, { SpaceToken } from "../../theme/space"
import { getTheme } from "../../theme"

export type StackGap = SpaceToken | string
export type StackAlign = `justify` | `center` | `left` | `right`
export type ResponsiveStackGap = {
  mobile?: StackGap
  phablet?: StackGap
  tablet?: StackGap
  desktop?: StackGap
  hd?: StackGap
}
export type StackAlignCSS = `justify` | `center` | `flex-start` | `flex-end`

export type GetStackStylesParams = {
  gap?: StackGap
  align?: StackAlign
  responsiveGap?: ResponsiveStackGap
}

export type GetStackStylesReturn = {
  stackCss: Interpolation
  stackItemCss: Interpolation
}

function getGapVal(gap: StackGap): string {
  if (space[gap as SpaceToken]) {
    return space[gap as SpaceToken]
  }

  return gap as string
}

export function getStackStyles(
  params?: GetStackStylesParams
): GetStackStylesReturn {
  const { gap = 0, responsiveGap = {} } = params || {}

  const gapVal: string = typeof gap === `string` ? gap : space[gap]
  const t = getTheme()

  const responsiveGapCss: object = Object.entries(t.mediaQueries).reduce<
    object
  >((acc, entry) => {
    if (responsiveGap[entry[0]]) {
      acc[entry[1]] = {
        marginTop: getGapVal(responsiveGap[entry[0]]),
      }
    }

    return acc
  }, {})

  //  console.log(responsiveGapCss)

  const stackCss: Interpolation = {
    display: `flex`,
    flexDirection: `column`,
    alignItems:
      params && params.align ? translateAlignToCss(params.align) : `justify`,
  }

  const stackItemCss: Interpolation = {
    marginTop: gapVal,

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
