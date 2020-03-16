/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import { getLinkStyles, LinkVariant } from "../../theme/styles/link"
import { BaseAnchorProps, BaseAnchor } from "../BaseAnchor"

type GatsbyLinkNoRefProps = Omit<GatsbyLinkProps<any>, "ref">

export type LinkProps = (
  | GatsbyLinkNoRefProps
  | Omit<BaseAnchorProps, "ref">) & {
  variant?: LinkVariant
}

function Link(props: GatsbyLinkProps<any>): JSX.Element
function Link(props: BaseAnchorProps): JSX.Element
function Link({ variant, ...rest }: LinkProps) {
  const commonProps = {
    css: getLinkStyles(variant),
  }

  if (isGatsbyLink(rest)) {
    // GatsbyLink does not support target attribute
    return <GatsbyLink {...commonProps} {...rest} target={undefined} />
  }

  return <BaseAnchor {...commonProps} {...rest} />
}

export default Link

/**
 * An awesome tidbit from React TypeScript Cheatsheet
 * https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md#typing-a-component-that-accepts-different-props
 */
function isGatsbyLink(props: LinkProps): props is GatsbyLinkNoRefProps {
  return "to" in props
}
