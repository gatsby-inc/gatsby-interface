/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import Chip from "./Chip"
import { BaseAnchorProps, BaseAnchor } from "../BaseAnchor"
import { PortfolioIcon } from "../icons"
import { MdArrowForward } from "react-icons/md"

export default {
  title: `Chip`,
  component: Chip,
}

export const Basic = () => <Chip>Lorem ipsum</Chip>

export const WithIcon = () => (
  <React.Fragment>
    <Chip icon={<MdArrowForward />} />
    {` `}
    <Chip icon={<PortfolioIcon />}>Lorem ipsum</Chip>
  </React.Fragment>
)

export const ChipAnchorExample = () => {
  function AnchorChip({ children, ...rest }: BaseAnchorProps) {
    const [highlighted, setHighlighted] = React.useState<boolean>(false)

    return (
      <BaseAnchor
        {...rest}
        onFocus={() => setHighlighted(true)}
        onBlur={() => setHighlighted(false)}
        onMouseEnter={() => setHighlighted(true)}
        onMouseLeave={() => setHighlighted(false)}
      >
        <Chip
          css={theme => [
            highlighted && {
              borderColor: theme.colors.blackFade["10"],
            },
          ]}
        >
          {children}
        </Chip>
      </BaseAnchor>
    )
  }
  return (
    <React.Fragment>
      <AnchorChip href="https://google.com" css={{ marginRight: `0.5rem` }}>
        Google
      </AnchorChip>
      <AnchorChip href="https://yandex.com">Yandex</AnchorChip>
    </React.Fragment>
  )
}
