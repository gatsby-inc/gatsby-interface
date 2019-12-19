import React from "react"
import styled from "@emotion/styled"

import CardSkeleton, { SkeletonStyledComponent } from "./Card.Skeleton"
import space from "../../theme/space"
import breakpoints from "../../theme/breakpoints"

export const StyledBaseCard = styled(SkeletonStyledComponent)`
  box-shadow: 0px 1px 2px rgba(46, 41, 51, 0.08),
    0px 2px 4px rgba(71, 63, 79, 0.08);
  border-radius: ${space[2]};
  margin-bottom: ${space[5]};
  padding: ${space[5]} ${space[7]};

  :last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    margin-bottom: ${space[7]};
    padding: ${space[7]} ${space[9]} ${space[8]};
  }
`

const BaseCard = props => (
  <CardSkeleton StyledComponent={StyledBaseCard} {...props} />
)

export default BaseCard
