import React from "react"
import styled from "@emotion/styled"

import CardSkeleton, { SkeletonStyledComponent } from "./Card.Skeleton"
import { spaces, breakpoints } from "../../utils/presets"

export const StyledBaseCard = styled(SkeletonStyledComponent)`
  box-shadow: 0px 1px 2px rgba(46, 41, 51, 0.08),
    0px 2px 4px rgba(71, 63, 79, 0.08);
  border-radius: ${spaces[`2xs`]};
  margin-bottom: ${spaces.m};
  padding: ${spaces.m} ${spaces.l};

  :last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    margin-bottom: ${spaces.l};
    padding: ${spaces.l} ${spaces[`2xl`]} ${spaces.xl};
  }
`

const BaseCard = props => (
  <CardSkeleton StyledComponent={StyledBaseCard} {...props} />
)

export default BaseCard
