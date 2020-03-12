/** @jsx jsx */
import { jsx } from "@emotion/core"
import { PropsOf } from "../../utils/types"
import { ThemeCss } from "../../theme"

const baseCss: ThemeCss = theme => ({
  background: theme.colors.white,
})

const standaloneCss: ThemeCss = theme => ({
  paddingTop: theme.space[6],
  paddingBottom: theme.space[5],
  paddingLeft: theme.space[7],
  paddingRight: theme.space[3],
  borderRadius: theme.radii[2],
  boxShadow: theme.shadows.raised,
})

type AllowedAs = "div" | "section" | "article"

export type CardProps = Omit<PropsOf<AllowedAs>, "ref"> & {
  as?: AllowedAs
  standalone?: boolean
}

export function Card({
  as: Component = `article`,
  standalone = true,
  ...rest
}: CardProps) {
  return (
    <Component
      css={theme => [baseCss(theme), standalone && standaloneCss(theme)]}
      {...rest}
    />
  )
}
