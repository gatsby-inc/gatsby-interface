/** @jsx jsx */
import * as React from "react"
import { jsx } from "@emotion/core"
import { Link } from "../Link"
import { ThemeCss } from "../../theme"

const messageCss: ThemeCss = theme => ({
  marginBottom: theme.space[3],
})

export interface MessageWithLinkProps {
  linkLabel: React.ReactNode
  href?: string
  target: string
  to?: string
}

export const MessageWithLink: React.FC<MessageWithLinkProps> = ({
  children,
  linkLabel,
  ...linkProps
}) => (
  <React.Fragment>
    <div css={messageCss}>{children}</div>
    <Link
      // we need to cast to "any" because TS claims that "href" is required for <Link /> even though it's not
      {...(linkProps as any)}
    >
      {linkLabel}
    </Link>
  </React.Fragment>
)
