/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { Link } from "../Link"

const messageCss = css`
  margin-bottom: 8px;
`

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
