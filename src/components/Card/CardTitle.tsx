/** @jsx jsx */
import { jsx } from "@emotion/core"
import { PropsOf } from "../../utils/types"
import { ThemeCss } from "../../theme"

const baseCss: ThemeCss = theme => ({
  display: "flex",
  alignItems: "center",
  color: theme.colors.grey[90],
  fontFamily: theme.fonts.heading,
  fontSize: theme.fontSizes[4],
  margin: `${theme.space[3]} 0 ${theme.space[4]}`,

  [theme.mediaQueries.desktop]: {
    margin: 0,
  },
})

type AllowedAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type CardTitleProps = Omit<PropsOf<AllowedAs>, "ref"> & {
  as?: AllowedAs
}

export function CardTitle({ as: Component = `h2`, ...rest }: CardTitleProps) {
  return <Component css={baseCss} {...rest} />
}
