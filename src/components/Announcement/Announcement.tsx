/** @jsx jsx */
import { jsx } from "@emotion/core"
import background from "./assets/background.svg"
import { ThemeCss } from "../../theme"

const baseCss: ThemeCss = theme => ({
  alignItems: `center`,
  background: theme.colors.teal[5],
  color: theme.colors.teal[90],
  display: `flex`,
  fontSize: theme.fontSizes[1],
  fontFamily: theme.fonts.system,
  padding: `${theme.space[5]} ${theme.space[9]}`,
  backgroundImage: `url(${background})`,
  backgroundPosition: `right center`,
  backgroundRepeat: `no-repeat`,

  [`&:not(:first-child)`]: {
    borderTop: `1px solid ${theme.colors.teal[10]}`,
  },
})

export type AnnouncementProps = Omit<JSX.IntrinsicElements["div"], "ref">

export function Announcement(props: AnnouncementProps) {
  return <div css={baseCss} {...props} />
}
