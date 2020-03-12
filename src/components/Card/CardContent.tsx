/** @jsx jsx */
import { jsx } from "@emotion/core"
import { PropsOf } from "../../utils/types"
import { ThemeCss } from "../../theme"

const baseCss: ThemeCss = theme => ({
  color: theme.colors.grey[50],
  fontFamily: theme.fonts.body,
  fontSize: theme.fontSizes[1],
  lineHeight: theme.lineHeights.body,
  marginTop: theme.space[5],
  marginRight: theme.space[5],
  marginBottom: theme.space[5],
  marginLeft: 0,

  [theme.mediaQueries.desktop]: {
    marginTop: theme.space[7],
    marginRight: theme.space[7],
    marginBottom: theme.space[7],
  },
})

type AllowedAs = "div" | "p"

export type CardContentProps = Omit<PropsOf<AllowedAs>, "ref"> & {
  as?: AllowedAs
}

export function CardContent({
  as: Component = `div`,
  ...rest
}: CardContentProps) {
  return <Component css={baseCss} {...rest} />
}
