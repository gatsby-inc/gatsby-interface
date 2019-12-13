/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../../utils/storybook"
import README from "./README.md"
import Chip from "./Chip"
import { BaseAnchorProps, BaseAnchor } from "../BaseAnchor"
import colors from "../../theme/colors"
import IconChip from "./IconChip"
import { PortfolioIcon } from "../icons"
import { MdArrowForward } from "react-icons/md"

storiesOf(`Chip`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`Chip`, () => {
    return (
      <StoryUtils.Container>
        <div>
          <Chip>Lorem ipsum</Chip>
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`IconChip`, () => {
    return (
      <StoryUtils.Container>
        <div>
          <IconChip icon={<MdArrowForward />} />
          {` `}
          <IconChip icon={<PortfolioIcon />}>Lorem ipsum</IconChip>
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`anchor chip example`, () => {
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
            css={[
              highlighted && {
                borderColor: colors.blackFade["10"],
              },
            ]}
          >
            {children}
          </Chip>
        </BaseAnchor>
      )
    }
    return (
      <StoryUtils.Container>
        <div>
          <AnchorChip href="https://google.com" css={{ marginRight: `0.5rem` }}>
            Google
          </AnchorChip>
          <AnchorChip href="https://yandex.com">Yandex</AnchorChip>
        </div>
      </StoryUtils.Container>
    )
  })
