/** @jsx jsx */
import { jsx } from "@emotion/core"
import { PropsOf } from "../../utils/types"
import { ThemeCss } from "../../theme"

const baseCss: ThemeCss = _theme => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
})

type AllowedAs = "header" | "div"

export type CardHeaderProps = Omit<PropsOf<AllowedAs>, "ref"> & {
  as?: AllowedAs
}

export function CardHeader({
  as: Component = `header`,
  ...rest
}: CardHeaderProps) {
  return <Component css={baseCss} {...rest} />
}
