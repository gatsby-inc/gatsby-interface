/** @jsx jsx */
import { jsx } from "@emotion/core"
import { css } from "@emotion/core"
import colors from "../../theme/colors"
import fontSizes from "../../theme/fontSizes"

const HEIGHT = `1.75rem`
const BORDER_WIDTH = `1px`
const BACKGROUND_COLOR = colors.grey["10"]

const baseCss = css({
  display: `inline-flex`,
  alignItems: `center`,
  verticalAlign: `middle`,
  minWidth: HEIGHT,
  height: HEIGHT,
  padding: `0 0.75rem`,
  backgroundColor: BACKGROUND_COLOR,
  borderRadius: `0.75rem`,
  fontSize: fontSizes[0],
  lineHeight: `calc(${HEIGHT} - 2 * ${BORDER_WIDTH})`,
  color: colors.blackFade["70"],
  border: `${BORDER_WIDTH} solid ${BACKGROUND_COLOR}`,
  whiteSpace: `nowrap`,
})

export type ChipProps = Omit<JSX.IntrinsicElements["span"], "ref">

export default function Chip({ ...props }: ChipProps) {
  return <span css={baseCss} {...props} />
}
